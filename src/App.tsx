import {
	createBrowserRouter,
	RouterProvider,
	Outlet,
	Routes,
	Route,
	useLocation,
	useNavigate,
} from 'react-router';
import { routes as publicRoutes } from '@/routes/routes';
import { Modal } from './components/Modal/Modal';
import Main from './connectors/Main/Main';
import Register from './connectors/Register/Register';
import Login from './connectors/Login/Login';
import LoginFormContainer from './connectors/LoginForm/LoginForm';
import RegisterFormContainer from './connectors/RegisterForm/RegisterForm';

function LayoutWrapper() {
	return <Outlet />;
}

const router = createBrowserRouter([
	{
		element: <LayoutWrapper />,
		children: publicRoutes,
	},
]);

function App() {
	const location = useLocation();
	const navigate = useNavigate();

	const onClose = () => {
		navigate(-1);
	};

	// Определяем фон (background), если Modal должен открываться поверх текущей страницы
	const state = location.state as { background?: Location };
	return (
		<div>
			<Routes location={state?.background || location}>
				{/* Основные маршруты */}
				<Route path="/main" element={<Main />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>

			{/* Модальные окна */}
			{state?.background && (
				<>
					<Routes>
						<Route
							path="/login"
							element={
								<Modal onClose={onClose}>
									<LoginFormContainer />
								</Modal>
							}
						/>
						<Route
							path="/register"
							element={
								<Modal onClose={onClose}>
									<RegisterFormContainer />
								</Modal>
							}
						/>
					</Routes>
				</>
			)}
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
