import './inside-fridge.css';
import { useState, useEffect } from 'react';
import { getMealById } from "../services/foodServices.tsx";
import { Food } from "../types/firebaseTypes.tsx";
import InsideFridge from '@/components/inside-fridge';
import { useParams, useNavigate, redirect } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth.ts';
import { Button } from './ui/button.tsx';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '@/config/firebase.ts';

// Convert timestamps
const formatTimestamp = (timestamp: any) => {
    if (!timestamp) return "N/A";
    return timestamp.toDate ? timestamp.toDate().toLocaleString() : new Date(timestamp).toLocaleString();
};

export default function MealDetails() {
    const [meal, setMeal] = useState<Food | null>(null);
    const [loading, setLoading] = useState(true);
    const { mealId } = useParams(); // Get mealId from URL
    const navigate = useNavigate();
    const {userData} = useAuth();

    useEffect(() => {
        if (!mealId) {
            setLoading(false);
            return;
        }

        const fetchMeal = async () => {
            try {
                const data = await getMealById(mealId);
                const mealsAvailable = data?.mealsAvailable;
                if (mealsAvailable) {
                    if (mealsAvailable > 0) {
                        setMeal(data);
                    }
                }

            } catch (error) {
                console.error("Error fetching meal details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMeal();
    }, [mealId]);

    if (loading) return <p>Loading meal details...</p>;
    if (!meal) return (
        <div>
            <button onClick={() => navigate(-1)}>Back</button>
            <p>Unfortunately this meal is no longer available.</p>
        </div>
    );

    const updateUser = async () => {
        if (!userData) {
            redirect('/login');
        }
        const userRef = doc(firestore, 'users', userData!.id);;
        const mealNum = userData!.meals_taken + 1;
        try {
            await setDoc(userRef, { meals_taken: mealNum }, { merge: true });
        } catch (error) {
            console.error('Error updating user data:', error);
        }
    }

    const takeMeal = async () => {
        if (!meal) {
            throw new Error('Meal data is not available.');
        }
        const mealRef = doc(firestore, 'food', mealId!);
        const mealCount = meal.mealsAvailable - 1;
        try {
            await setDoc(mealRef, { mealsAvailable: mealCount }, { merge: true });
            await updateUser();
            const data = await getMealById(mealId!);
            const mealsAvailable = data?.mealsAvailable;
            if (mealsAvailable) {
                if (mealsAvailable > 0) {
                    setMeal(data);
                }
            }
        } catch (error) {
            console.error('Error updating meal data:', error);
        }
        console.log("Meal taken");
    };

    return (
        <InsideFridge>
            <div className='detail-page'>
                <Button onClick={() => navigate(-1)} className='button1'>Back</Button>
                <h2><strong>{meal.name}</strong></h2>
                <p>{meal.location}</p>
                <div className='meal-info'>
                    <p>{meal.description}</p>
                    <p>Meals Available: <strong>{meal.mealsAvailable}</strong></p>
                </div>
                <p className="meal-timing">
                    Pickup: {formatTimestamp(meal.startPickup)} - {formatTimestamp(meal.endPickup)}
                </p>
                    <p>Location: {meal.location}</p>
                {meal.imageUrl && <img src={meal.imageUrl} alt={meal.name} />}
                <Button className='button2' onClick={takeMeal}>Take Meal</Button>
            </div>
        </InsideFridge>
    );
}
