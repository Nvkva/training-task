// screens/LoginForm/LoginForm.tsx
import { Field } from '@/components/Field/Field';
import { Button } from '@/components/Button/Button';
import React, { ChangeEvent } from 'react';

export interface LoginFormProps {
	email: string;
	password: string;
	onEmailChange: (email: string) => void;
	onPasswordChange: (password: string) => void;
	onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({
	email,
	password,
	onEmailChange,
	onPasswordChange,
	onSubmit,
}) => {
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(email, password);
	};

	return (
		<form onSubmit={handleSubmit}>
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
			<Button>Login</Button>
		</form>
	);
};

export default LoginForm;
