// screens/MainPage/MainPageContainer.tsx
import React, { useEffect, useState } from 'react';
import { mainPageData, MainPageData } from '@/api/main-page';
import MainPage from '@/pages/MainPage/MainPage';

const Main: React.FC = () => {
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
		<MainPage
			data={data}
			error={error}
		/>
	);
};

export default Main;
