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
                <div key={food.id} className="meal ">
                    <h2 className="meal-title">{food.name}</h2>
                    <p className="meal-description">{food.description}</p>
                    <p className="meal-availability">
                        Meals Available: <strong>{food.mealsAvailable}</strong>
                    </p>
                    <p className="meal-timing">
                        Pickup:{" "}
                        {food.startPickup
                            ? food.startPickup.toLocaleString()
                            : "N/A"}{" "}
                        -{" "}
                        {food.endPickup
                            ? food.endPickup.toLocaleString()
                            : "N/A"}
                    </p>
                </div>
            ))}
        </div>
    );
}