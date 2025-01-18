import React, { useEffect, useState } from 'react';
import { LoginData, loginRequest } from '@/api/login-page';
import LoginPage from '@/pages/LoginPage/LoginPage';

const Login: React.FC = () => {
	const [data, setData] = useState<LoginData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		loginRequest()
			.then((response) => setData(response))
			.catch((err) =>
				setError(err instanceof Error ? err.message : String(err))
			);
	}, []);

	const handleLoginSubmit = (email: string, password: string) => {
		console.log('Login data:', { email, password });
	};

	return <LoginPage data={data} error={error} onSubmit={handleLoginSubmit} />;
};

export default Login;
