import React from 'react';
import { useAuth } from '../hooks/useAuth';

const AuthStatus: React.FC = () => {
    const { user, userData, loading } = useAuth();

    if (loading) {
        return <div>Loading...</div>;
    }

    // const maskEmail = (email: string | null) => {
    //     if (email != null) {
    //         const [localPart, domain] = email.split('@');
    //         const maskedLocalPart = localPart[0] + '***' + localPart.slice(-1);
    //         return `${maskedLocalPart}@${domain}`;
    //     } 
    // };

    console.log(userData);

    return (
        <div>
            {user ? `Hi ${userData?.name}!` : "Login"}
        </div>
    );
};

export default AuthStatus;