import { useState, useEffect } from "react";
import { onAuthStateChanged, User as FirebaseUser } from "firebase/auth";
import { auth, firestore } from '../config/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

export interface User {
    id: string;
    auth_id: string;
    email: string;
    name: string;
    meals_saved: number;
    meals_taken: number;
}

export const useAuth = () => {
    const [user, setUser] = useState<FirebaseUser | null>(null);
    const [userData, setUserData] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            setUser(user);
            if (user && auth.currentUser) {
                console.log(auth.currentUser.uid);
                const q = query(collection(firestore, "users"), where("auth_id", "==", auth.currentUser.uid));
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    setUserData({ ...doc.data(), id: doc.id } as User);
                });
            } else {
                setUserData(null);
            }
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    return { user, userData, loading };
};