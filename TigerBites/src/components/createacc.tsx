import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { addDoc, collection } from "@firebase/firestore";
import { firestore } from "../config/firebase";
import "./login.css"

export interface User {
    auth_id: string;
    email: string;
    name: string;
    meals_saved: number;
    meals_taken: number;
}

const col = collection(firestore, "users");
const saveUser = async ({ name, email }: { name: string; email: string }) => {
    const user_full: User = {
        auth_id: auth.currentUser?.uid || "",
        email: email,
        name: name,
        meals_saved: 0,
        meals_taken: 0,
    }

    try {
        await addDoc(col, user_full);
    } catch (error) {
        console.error("Error saving user:", error);
    }
};

const CreateAcc: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            navigate('/');
        } catch (error) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
                await saveUser({ email, name });
                console.log("User logged in successfully");
                navigate('/');
            } catch (error) {
                console.error("Error logging in:", error);
            }
            console.error("Error logging in:", error);
        }
    };

    return (
        <form onSubmit={handleLogin}>
            <Input
                className='input'
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <Input
                className='input'
                type="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
            />
            <Input
                className='input'
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <Button className="btn" type="submit">Submit</Button>
            <a href="/login" className='link'>Already have an account?</a>
        </form>
    );
};

export default CreateAcc;