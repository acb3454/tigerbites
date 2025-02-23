import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Login from '../components/login';
import Logout from '../components/logout';
import InsideFridge from '@/components/inside-fridge';
import NavBar from '@/components/navbar';
import './Auth.css'

const Auth: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <InsideFridge>
            <NavBar></NavBar>
            <div className="auth">
                {user ? (
                    <div className='form'>
                        <h1>Welcome, {user.email}</h1>
                        <Logout />
                    </div>
                ) : (
                    <div className='form'>
                        <h1>Please log in</h1>
                        <Login />
                    </div>
                )}
            </div>
        </InsideFridge>
    );
};

export default Auth;