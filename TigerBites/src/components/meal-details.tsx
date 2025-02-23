import './inside-fridge.css';
import { useState, useEffect } from 'react';
import { getMealById } from "../services/foodServices.tsx";
import { Food } from "../types/firebaseTypes.tsx";
import InsideFridge from '@/components/inside-fridge';

interface MealDetailProps {
    mealId: string;
    onBack: () => void;
}

export default function MealDetails({ mealId, onBack }: MealDetailProps) {
    const [meal, setMeal] = useState<Food | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
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
        <>
            <InsideFridge>
                {/* <NavBar></NavBar> */}
                <div className="inside-base">
                    <button onClick={onBack}>Back</button>
                    <h2>{meal.name}</h2>
                    <p>{meal.description}</p>
                    <p>Meals Available: <strong>{meal.mealsAvailable}</strong></p>
                    <p className="meal-timing">
                        Pickup:{" "}
                        {meal.startPickup
                            ? meal.startPickup.toLocaleString()
                            : "N/A"}{" "}
                        -{" "}
                        {meal.endPickup
                            ? meal.endPickup.toLocaleString()
                            : "N/A"}
                    </p>
                    {meal.imageUrl && <img src={meal.imageUrl} alt={meal.name} />}
                </div>
            </InsideFridge>
        </>
    );
}
