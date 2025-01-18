// screens/LoginForm/LoginFormContainer.tsx
import React, { useState } from 'react';
import LoginForm from '../../screens/LoginForm/LoginForm';

const LoginFormContainer: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (newEmail: string) => {
        setEmail(newEmail);
    };

    const handlePasswordChange = (newPassword: string) => {
        setPassword(newPassword);
    };

    const handleSubmit = (email: string, password: string) => {
        console.log('Submitted data:', { email, password });
        // Логика обработки данных
    };

    return (
        <LoginForm
            email={email}
            password={password}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onSubmit={handleSubmit}
        />
    );
};

export default LoginFormContainer;
