import { loginRequest, LoginData } from '@/api/login-page';
import { Section } from '@/components/Section/Section';
import { Layout } from '@/components/Layout/Layout';
import { useEffect, useState } from 'react';
import { Card } from '@/components/Card/Card';
import LoginForm from '@/screens/LoginForm/LoginForm';

const handleLoginSubmit = (email: string, password: string) => {
	console.log('Login data:', { email, password });
};

const LoginPage: React.FC = () => {
	const [data, setData] = useState<LoginData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		loginRequest()
			.then((response) => setData(response))
			.catch((err) =>
				setError(err instanceof Error ? err.message : String(err))
			);
	}, []);

	return (
		<Layout headerSettings={{ menu: [] }} footerSettings={{ columns: [] }}>
			<Section>
				<Card>
					<LoginForm onSubmit={handleLoginSubmit} />
				</Card>
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

export default LoginPage;
