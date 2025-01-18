import { LoginData } from '@/api/login-page';
import { Section } from '@/components/Section/Section';
import { Layout } from '@/components/Layout/Layout';
import { Card } from '@/components/Card/Card';
import { footerSettings, headerSettings } from '@/constants/constans';
import LoginFormContainer from '@/connectors/LoginForm/LoginForm';

type LoginPageProps = {
	data: LoginData | null;
	error: string | null;
	onSubmit: (email: string, password: string) => void;
};

const LoginPage: React.FC<LoginPageProps> = ({ data, error, onSubmit }) => {
	return (
		<Layout headerSettings={headerSettings} footerSettings={footerSettings}>
			<Section>
				<Card>
					<LoginFormContainer />
				</Card>
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

export default LoginPage;
