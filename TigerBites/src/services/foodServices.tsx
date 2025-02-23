// import { firestore } from "../config/firebase.ts";
// import { collection, getDocs, DocumentData, Timestamp } from "firebase/firestore";
// import { Food } from "../types/firebaseTypes.tsx";

// export async function getFoodItems(): Promise<Food[]> {
//     const foodCollection = collection(firestore, "food");
//     const snapshot = await getDocs(foodCollection);

//     return snapshot.docs.map((doc) => {
//         const data = doc.data() as DocumentData;

//         return {
//             id: doc.id,
//             contact: data.contact,
//             name: data.name,
//             description: data.description,
//             mealsAvailable: data['meals available'],
//             startPickup: data['start pickup'] instanceof Timestamp 
//                 ? data['start pickup'].toDate() 
//                 : data['start pickup'] || null,
//             endPickup: data['end pickup'] instanceof Timestamp 
//                 ? data['end pickup'].toDate() 
//                 : data['end pickup'] || null,
//         } as Food;
//     });
// }

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
            mealsAvailable: data.mealsAvailable ?? 0, // Default to 0 if missing
            startPickup: data.startPickup instanceof Timestamp 
                ? data.startPickup?.toDate() 
                : null,
            endPickup: data.endPickup instanceof Timestamp 
                ? data.endPickup?.toDate() 
                : null,
        } as Food;
    });
}

