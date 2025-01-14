import { mainPageData, MainPageData } from '@/api/main-page';
import { Button } from '@/components/Button/Button';
import { Layout } from '@/components/Layout/Layout';
import { Modal } from '@/components/Modal/Modal';
import { Section } from '@/components/Section/Section';
import LoginForm from '@/screens/LoginForm/LoginForm';
import RegisterForm from '@/screens/RegisterForm/RegisterForm';
import { useEffect, useState } from 'react';

const MainPage: React.FC = () => {
	const [isLoginDialogDisplayed, displayLoginDialog] = useState(false);
	const [isRegisterDialogDisplayed, displayRegisterDialog] = useState(false);
	const [data, setData] = useState<MainPageData | null>(null);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		mainPageData()
			.then((response) => setData(response))
			.catch((err) =>
				setError(err instanceof Error ? err.message : String(err))
			);
	}, []);

	return (
		<Layout headerSettings={{ menu: [] }} footerSettings={{ columns: [] }}>
			<Section>
				<Button onClick={() => displayLoginDialog(true)}>Login</Button>
				<Button onClick={() => displayRegisterDialog(true)}>Register</Button>
				{isLoginDialogDisplayed && (
					<Modal onClose={() => displayLoginDialog(false)}>
						<LoginForm
							onSubmit={(email, password) => {
								console.log('Login data:', { email, password });
								displayLoginDialog(false);
							}}
						/>
					</Modal>
				)}
				{isRegisterDialogDisplayed && (
					<Modal onClose={() => displayRegisterDialog(false)}>
						<RegisterForm
							onSubmit={(name, email, password, confirmPassword) => {
								console.log('Register data:', {
									name,
									email,
									password,
									confirmPassword,
								});
								displayRegisterDialog(false);
							}}
						/>
					</Modal>
				)}
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

export default MainPage;
