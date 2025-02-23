import React from 'react';
import { useAuth } from '../hooks/useAuth';
import Login from '../components/login';
import Logout from '../components/logout';

const Auth: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            {user ? (
                <div>
                    <h1>Welcome, {user.email}</h1>
                    <Logout />
                </div>
            ) : (
                <div>
                    <h1>Please log in</h1>
                    <Login />
                </div>
            )}
        </div>
    );
};

export default Auth;