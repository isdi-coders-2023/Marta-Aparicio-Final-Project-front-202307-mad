import { Header } from '../users/components/header/header';
import { LoginForm } from '../users/components/loginUser/loginForm';
import { RegisterForm } from '../users/components/registerUser/registerForm';

export function App() {
  return (
    <>
      <Header></Header>
      <RegisterForm></RegisterForm>
      <LoginForm></LoginForm>
    </>
  );
}
