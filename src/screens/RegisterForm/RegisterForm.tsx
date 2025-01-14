import { Button } from "@/components/Button/Button";
import { Field } from "@/components/Field/Field";
import { InputEmail } from "@/components/Input/Input";
import { Input, InputPassword } from "@/ui";
import { useState } from "react";

export interface RegisterFormProps {
	onSubmit: (
		name: string,
		email: string,
		password: string,
		confirmPassword: string
	) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onSubmit }) => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit(name, email, password, confirmPassword);
	};

	return (
		<form onSubmit={handleSubmit}>
      <Field><Input value={email} onChange={(e: any) => setName(e.target.value)}></Input></Field>
			<Field><InputEmail value={email} onChange={(e) => setEmail(e.target.value)}></InputEmail></Field>
			<Field><InputPassword value={password} onChange={(e: any) => setPassword(e.target.value)}></InputPassword></Field>
			<Button onClick={() => {}} >Register</Button>
		</form>
	);
};

export default RegisterForm;