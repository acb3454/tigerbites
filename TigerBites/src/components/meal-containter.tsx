import './meal-container.css';
import { useEffect, useState } from "react";
import { getFoodItems } from "../services/foodServices.tsx";
import { Food } from "../types/firebaseTypes.tsx";
import { useNavigate } from 'react-router-dom';

interface MealContainerProps {
    onMealClick: (id: string) => void;
}

export default function MealContainer({ onMealClick }: MealContainerProps) {
    const [foodItems, setFoodItems] = useState<Food[]>([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const data = await getFoodItems();
                const now = new Date();
                const filteredData = data.filter((food: Food) => {
                    const end = food.endPickup ? food.endPickup : new Date(food.endPickup);
                    return food.mealsAvailable > 0 && now <= end; // Meal must be available & within pickup time range
                });
                setFoodItems(filteredData);
                console.log("Fetched food items:", data);
                console.log("Displaying food items:", filteredData);
            } catch (error) {
                console.error("Error fetching food items:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchFood();
    }, []);

    if (loading) return <p>Loading food items...</p>;

    return (
        <div className="meal-container">
            {foodItems.map((food) => (
                <div key={food.id} className="meal " onClick={() => navigate(`/meal/${food.id}`)}>
                    <img src={food.imageUrl || "default-image-url.jpg"} className='food-image'></img>
                </div>
            ))}
        </div>
    );
}