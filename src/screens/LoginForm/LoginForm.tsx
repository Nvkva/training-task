import { Field } from "@/components/Field/Field";
import { InputEmail, InputPassword } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { useState } from "react";

export interface LoginFormProps {
	onSubmit: (email: string, password: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(email, password);
	};

	return (
		<form onSubmit={handleSubmit}>
      <Field><InputEmail value={email} onChange={(e) => setEmail(e.target.value)}></InputEmail></Field>
      <Field><InputPassword value={password} onChange={(e: any) => setPassword(e.target.value)}></InputPassword></Field>
			<Button onClick={() => {}}>Login</Button>
		</form>
	);
};

export default LoginForm;