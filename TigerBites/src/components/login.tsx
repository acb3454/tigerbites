import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

const Login: React.FC = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log("User logged in successfully");
            navigate('/');
        } catch (error) {
            try {
                await createUserWithEmailAndPassword(auth, email, password);
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
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
            />
            <Input
                className=""
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <Button type="submit">Login</Button>
        </form>
    );
};

export default Login;