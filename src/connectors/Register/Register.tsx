import React, { useEffect, useState } from 'react';
import { RegistrationData, registrationRequest } from '@/api/register-page';
import RegisterPage from '@/pages/RegisterPage/RegisterPage';

const Register: React.FC = () => {
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
		<RegisterPage data={data} error={error}/>
	);
};

export default Register;
