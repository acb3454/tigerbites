import './meal-container.css';
import { useEffect, useState } from "react";
import { getFoodItems } from "../services/foodServices.tsx";
import { Food } from "../types/firebaseTypes.tsx";

export default function MealContainer() {
    const [foodItems, setFoodItems] = useState<Food[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchFood = async () => {
            try {
                const data = await getFoodItems();
                setFoodItems(data);
                console.log("Fetched food items:", data);
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
                <div key={food.id} className="polaroid">
                <img src={food.imageUrl || "default-image-url.jpg"} className='food-image' />
                <p className="caption">   </p>
            </div>
            ))}
        </div>
    );
}