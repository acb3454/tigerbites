import './inside-fridge.css';
import { useState, useEffect } from 'react';
import { getMealById } from "../services/foodServices.tsx";
import { Food } from "../types/firebaseTypes.tsx";
import InsideFridge from '@/components/inside-fridge';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth.ts';
import { Button } from './ui/button.tsx';
import { doc, setDoc } from 'firebase/firestore';
import { firestore } from '@/config/firebase.ts';
import NavBar from './navbar.tsx';

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
            navigate('/login');
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
        if (!meal || !userData) {
            navigate('/login');
            return;
        }

        const newMealsAvailable = meal.mealsAvailable - 1;
        const mealRef = doc(firestore, 'food', mealId!);

        try {
            await setDoc(mealRef, { mealsAvailable: newMealsAvailable }, { merge: true });
            await updateUser();

            if (newMealsAvailable > 0) {
                setMeal({ ...meal, mealsAvailable: newMealsAvailable }); // Update UI immediately
            } else {
                setMeal(null); // Hide meal if it's out of stock
            }
        } catch (error) {
            console.error('Error updating meal data:', error);
        }
    };

    return (
        <>
        <NavBar />
        <InsideFridge>
            <div className='detail-page'>
                <h2><strong>{meal.name}</strong></h2>
                <p>{meal.location}</p>
                <div className='meal-info'>
                    <p>{meal.description}</p>
                    <p>Meals Available: <strong>{meal.mealsAvailable}</strong></p>
                </div>
                <p className="meal-timing">
                    Pickup: {formatTimestamp(meal.startPickup)} - {formatTimestamp(meal.endPickup)}
                </p>
                <br/>
                {meal.imageUrl && <img src={meal.imageUrl} alt={meal.name} />}
                {userData ? (
                        <Button className='button2' onClick={takeMeal}>Take Meal</Button>
                    ) : (
                        <p>Please <a href="/login">log in</a> to take a meal.</p>
                )}
            </div>
        </InsideFridge>
        </>
    );
}
