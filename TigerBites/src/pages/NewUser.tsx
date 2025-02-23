import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Logout from '../components/logout';
import InsideFridge from '@/components/inside-fridge';
import NavBar from '@/components/navbar';
import './Auth.css'
import CreateAcc from '@/components/createacc';

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
                        <h1>Welcome, {user.email}</h1>
                        <Logout />
                    </div>
                ) : (
                    <div className='form'>
                        <h1>Create a new account</h1>
                        <CreateAcc/>
                    </div>
                )}
            </div>
        </InsideFridge>
    );
};

export default Auth;