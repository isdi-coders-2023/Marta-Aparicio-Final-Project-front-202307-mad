import { SyntheticEvent } from 'react';
import { UserNoId } from '../../../model/user';
import { useUsers } from '../../hooks/use.users';
import { LoginForm } from '../loginUser/loginForm';
import styles from '../registerUser/registerForm.module.scss';
export default function RegisterForm() {
  const { register } = useUsers();
  const handleSubmit = (ev: SyntheticEvent) => {
    ev.preventDefault();
    const loginForm = ev.target as HTMLFormElement;
    const newUser: UserNoId = {
      userName: (loginForm.elements.namedItem('userName') as HTMLInputElement)
        .value,
      email: (loginForm.elements.namedItem('email') as HTMLInputElement).value,
      password: (loginForm.elements.namedItem('password') as HTMLInputElement)
        .value,
      recipes: [],
    };
    register(newUser);
  };

  return (
    <main className={styles.main}>
      <form aria-label="register" onSubmit={handleSubmit}>
        <legend>REGÍSTRATE</legend>
        <input type="text" name="userName" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <button aria-label="register-button" type="submit">
          Enviar
        </button>
      </form>
      <LoginForm></LoginForm>
    </main>
  );
}
