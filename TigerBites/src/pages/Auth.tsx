import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Login from '../components/login';
import Logout from '../components/logout';
import InsideFridge from '@/components/inside-fridge';
import NavBar from '@/components/navbar';
import './Auth.css'

const Auth: React.FC = () => {
    const { user, userData, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <InsideFridge>
            <NavBar></NavBar>
            <div className="auth">
                {user ? (
                    <div className='form'>
                        <h1>Welcome, {userData?.name}</h1>
                        <div className='info'>
                            <div className='item'>
                                <h2>Meals Posted</h2>
                                <p>{userData?.meals_saved}</p>
                            </div>
                            <div className='item'>
                                <h2>Meals Taken</h2>
                                <p>{userData?.meals_taken}</p>
                            </div>
                        </div>
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