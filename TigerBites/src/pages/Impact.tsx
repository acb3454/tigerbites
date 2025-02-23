import './Impact.css';
import NavBar from '../components/navbar';
import { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { firestore } from '../config/firebase';
import { User } from '../hooks/useAuth';
import  InnerFridge  from '@/components/inside-fridge';

function Impact() {
    const [totalMealsSaved, setTotalMealsSaved] = useState(0);
    const [totalMealsTaken, setTotalMealsTaken] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const usersCollection = collection(firestore, 'users');
                const usersSnapshot = await getDocs(usersCollection);
                let mealsSaved = 0;
                let mealsTaken = 0;
                usersSnapshot.forEach((doc) => {
                    const userData = doc.data() as User;
                    console.log(userData, userData.meals_saved, userData.meals_taken);
                    mealsSaved += userData.meals_saved || 0;
                    mealsTaken += userData.meals_taken || 0;
                });
                setTotalMealsSaved(mealsSaved);
                setTotalMealsTaken(mealsTaken);
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchUserData();
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <NavBar />
            <InnerFridge>
            <div className='impact mx-20'>
                <h1>Impact Summary</h1>
                <p>Total Meals Posted: <strong>{totalMealsSaved}</strong></p>
                <p>Total Meals Taken: <strong>{totalMealsTaken}</strong></p>
                <br/>
                <p>
                  These numbers represent our collective effort to tackle sustainability and food insecurity on campus. By posting and taking meals, we are reducing food waste and ensuring that no student goes hungry. Every meal posted is a step towards a more sustainable future, and every meal taken is a testament to the community's support for one another.
                </p>
                <br/>
                <p>
                  Thank you for being a part of this initiative. Together, we are making a significant impact on our campus and beyond.
                </p>
            </div>
            </InnerFridge>
        </>
    );
}

export default Impact;