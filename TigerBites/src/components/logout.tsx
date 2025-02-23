import React from 'react';
import { signOut } from "firebase/auth";
import { auth } from '../config/firebase';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Logout: React.FC = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        try {
            await signOut(auth);
            console.log("User logged out successfully");
            navigate('/');
        } catch (error) {
            console.error("Error logging out:", error);
        }
    };

    return <Button type="submit" onClick={handleLogout}>Logout</Button>;
};

export default Logout;