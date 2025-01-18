// screens/RegisterForm/RegisterForm.tsx
import { Field } from '@/components/Field/Field';
import { Button } from '@/components/Button/Button';
import React, { ChangeEvent } from 'react';

export interface RegisterFormProps {
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
    onNameChange: (name: string) => void;
    onEmailChange: (email: string) => void;
    onPasswordChange: (password: string) => void;
    onConfirmPasswordChange: (confirmPassword: string) => void;
    onSubmit: (
        name: string,
        email: string,
        password: string,
        confirmPassword: string
    ) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({
    name,
    email,
    password,
    confirmPassword,
    onNameChange,
    onEmailChange,
    onPasswordChange,
    onConfirmPasswordChange,
    onSubmit,
}) => {
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit(name, email, password, confirmPassword);
    };

    return (
        <form onSubmit={handleSubmit}>
            <Field
                fieldText="Имя"
                type="text"
                value={name}
                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    onNameChange(event.target.value)
                }
            />
            <Field
                fieldText="Почта"
                type="email"
                value={email}
                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    onEmailChange(event.target.value)
                }
            />
            <Field
                fieldText="Пароль"
                type="password"
                value={password}
                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    onPasswordChange(event.target.value)
                }
            />
            <Field
                fieldText="Подтверждение пароля"
                type="password"
                value={confirmPassword}
                onChange={(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
                    onConfirmPasswordChange(event.target.value)
                }
            />
            <Button>Register</Button>
        </form>
    );
};

export default RegisterForm;
