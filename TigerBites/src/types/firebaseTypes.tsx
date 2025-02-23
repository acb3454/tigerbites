import { Timestamp, DocumentReference } from "firebase/firestore";

export interface Food {
    id: string;
    contact: DocumentReference;
    name: string;
    description: string;
    startPickup: Timestamp | Date;
    endPickup: Timestamp | Date;
    mealsAvailable: number;
    imageUrl: string;
    location: string;
}

export interface Impact {
    id: string;
    mealsDistributed: number;
}

export interface Users {
    id: string;
    email: string;
    name: string;
    mealsProvided: number;
    mealsTaken: number;
}