// screens/MainPage/MainPage.tsx
import { Button } from '@/components/Button/Button';
import { Layout } from '@/components/Layout/Layout';
import { Section } from '@/components/Section/Section';
import { MainPageData } from '@/api/main-page';
import { footerSettings, headerSettings } from '@/constants/constans';
import { ButtonLink } from '@/ui';

type MainPageProps = {
	data: MainPageData | null;
	error: string | null;
};

const MainPage: React.FC<MainPageProps> = ({
	data,
	error,
}) => {
	return (
		<Layout headerSettings={headerSettings} footerSettings={footerSettings}>
			<Section>
				<ButtonLink href={'/login'}>Login</ButtonLink>
				<ButtonLink href={'/register'}>Register</ButtonLink>
				{data && <div>{data.message}</div>}
				{error && <div>Error: {error}</div>}
			</Section>
		</Layout>
	);
};

export default MainPage;
