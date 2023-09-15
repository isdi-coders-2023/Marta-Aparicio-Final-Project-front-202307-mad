// import styles from './userform.module.scss';

import { SyntheticEvent } from 'react';
import { UserNoId } from '../../../model/user';
import { useUsers } from '../../hooks/use.users';

export function RegisterForm() {
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
      recipies: [],
    };
    register(newUser);
  };

  return (
    <>
      <form
        // className={styles.registerForm}
        aria-label="register"
        onSubmit={handleSubmit}
      >
        <legend>REGÍSTRATE</legend>
        <input type="text" name="userName" placeholder="Nombre" required />
        <input type="email" name="email" placeholder="Email" required />
        <input
          type="password"
          name="password"
          placeholder="Contraseña"
          required
        />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}
