import './inside-fridge.css';
import { useState, useEffect } from 'react';
import { getMealById } from "../services/foodServices.tsx";
import { Food } from "../types/firebaseTypes.tsx";
import InsideFridge from '@/components/inside-fridge';
import { useParams, useNavigate } from 'react-router-dom';

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

    useEffect(() => {
        if (!mealId) {
            setLoading(false);
            return;
        }

        const fetchMeal = async () => {
            try {
                const data = await getMealById(mealId);
                setMeal(data);
            } catch (error) {
                console.error("Error fetching meal details:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchMeal();
    }, [mealId]);

    if (loading) return <p>Loading meal details...</p>;
    if (!meal) return <p>Meal not found.</p>;

    return (
        <InsideFridge>
            <div className='detail-page'>
                <button onClick={() => navigate(-1)}>Back</button>
                <h2><strong>{meal.name}</strong></h2>
                <div className='meal-info'>
                    <p>{meal.description}</p>
                    <p>Meals Available: <strong>{meal.mealsAvailable}</strong></p>
                </div>
                <p className="meal-timing">
                    Pickup: {formatTimestamp(meal.startPickup)} - {formatTimestamp(meal.endPickup)}
                </p>
                {meal.imageUrl && <img src={meal.imageUrl} alt={meal.name} />}
            </div>
        </InsideFridge>
    );
}
