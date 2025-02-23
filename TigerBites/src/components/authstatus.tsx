import React from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthStatus: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    const maskEmail = (email: string | null) => {
        if (email != null) {
            const [localPart, domain] = email.split('@');
            const maskedLocalPart = localPart[0] + '***' + localPart.slice(-1);
            return `${maskedLocalPart}@${domain}`;
        } 
    };

    return (
        <div>
            {user ? `Logged in as ${maskEmail(user.email)}` : "Not logged in"}
        </div>
    );
};

export default AuthStatus;