// screens/RegisterPage/RegisterPage.tsx
import { Card } from '@/components/Card/Card';
import { Layout } from '@/components/Layout/Layout';
import { Section } from '@/components/Section/Section';
import RegisterForm from '@/screens/RegisterForm/RegisterForm';
import { RegistrationData } from '@/api/register-page';
import { footerSettings, headerSettings } from '@/constants/constans';
import RegisterFormContainer from '@/connectors/RegisterForm/RegisterForm';

type RegisterPageProps = {
	data: RegistrationData | null;
	error: string | null;
};

const RegisterPage: React.FC<RegisterPageProps> = ({
	data,
	error,
}) => {
	return (
		<Layout headerSettings={headerSettings} footerSettings={footerSettings}>
			<Section>
				<Card>
					<RegisterFormContainer />
				</Card>
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

export default RegisterPage;
