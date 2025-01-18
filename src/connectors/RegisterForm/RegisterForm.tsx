// screens/RegisterForm/RegisterFormContainer.tsx
import RegisterForm from '@/screens/RegisterForm/RegisterForm';
import React, { useState } from 'react';

const RegisterFormContainer: React.FC = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleNameChange = (newName: string) => setName(newName);
    const handleEmailChange = (newEmail: string) => setEmail(newEmail);
    const handlePasswordChange = (newPassword: string) => setPassword(newPassword);
    const handleConfirmPasswordChange = (newConfirmPassword: string) =>
        setConfirmPassword(newConfirmPassword);

    const handleSubmit = (
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    ) => {
        console.log('Submitted data:', { name, email, password, confirmPassword });
    };

    return (
        <RegisterForm
            name={name}
            email={email}
            password={password}
            confirmPassword={confirmPassword}
            onNameChange={handleNameChange}
            onEmailChange={handleEmailChange}
            onPasswordChange={handlePasswordChange}
            onConfirmPasswordChange={handleConfirmPasswordChange}
            onSubmit={handleSubmit}
        />
    );
};

export default RegisterFormContainer;
