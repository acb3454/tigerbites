import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../config/firebase';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';

import "./login.css"


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
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
            />
            <Button className="btn" type="submit">Login</Button>
            <a href="/newuser" className="link" type="submit">Create an account</a>
        </form>
    );
};

export default Login;