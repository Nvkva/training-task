import { registrationRequest, RegistrationData } from "@/api/register-page";
import { Card } from "@/components/Card/Card";
import { Layout } from "@/components/Layout/Layout";
import { Section } from "@/components/Section/Section";
import RegisterForm from "@/screens/RegisterForm/RegisterForm";
import { useEffect, useState } from "react";

const handleRegistration = (
	name: string,
	email: string,
	password: string,
	confirmPassword: string
) => {
	console.log('Registration data:', {
		name,
		email,
		password,
		confirmPassword,
	});
};

const RegisterPage: React.FC = () => {
	const [data, setData] = useState<RegistrationData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		registrationRequest()
			.then((response) => setData(response))
			.catch((err) =>
				setError(err instanceof Error ? err.message : String(err))
			);
	}, []);

	return (
		<Layout headerSettings={{ menu: [] }} footerSettings={{ columns: [] }}>
			<Section>
				<Card>
					<RegisterForm onSubmit={handleRegistration} />
				</Card>
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

export default RegisterPage;