import { firestore } from "../config/firebase.ts";
import { collection, getDocs, DocumentData, Timestamp } from "firebase/firestore";
import { Food } from "../types/firebaseTypes.tsx";

export async function getFoodItems(): Promise<Food[]> {
    const foodCollection = collection(firestore, "food");
    const snapshot = await getDocs(foodCollection);

    return snapshot.docs.map((doc) => {
        const data = doc.data() as DocumentData;

        return {
            id: doc.id,
            contact: data.contact,
            name: data.name,
            description: data.description,
            mealsAvailable: data.mealsAvailable ?? 0,
            startPickup: data.startPickup instanceof Timestamp 
                ? data.startPickup?.toDate() 
                : null,
            endPickup: data.endPickup instanceof Timestamp 
                ? data.endPickup?.toDate() 
                : null,
            imageUrl: data.imageUrl,
        } as Food;
    });
}

