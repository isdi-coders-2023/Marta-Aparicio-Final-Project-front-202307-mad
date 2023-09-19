import ErrorPage from '../components/error-page/error-page';
import { Header } from '../components/header/header';
import HomePage from '../components/home/home';
import RegisterForm from '../users/components/registerUser/registerForm';

export function App() {
  return (
    <>
      <Header></Header>
      <HomePage></HomePage>
      <ErrorPage></ErrorPage>
      <RegisterForm></RegisterForm>
    </>
  );
}
