import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { MenuOption } from '../types/menu';
import { AppRoutes } from './app.routes';

const MockedHome = jest.fn().mockReturnValue(<h1>Home</h1>);
jest.mock('../components/home/home', () => MockedHome);

const MockedRegister = jest.fn().mockReturnValue(<h1>Register</h1>);
jest.mock(
  '../users/components/registerUser/registerForm',
  () => MockedRegister
);
const MockedError = jest.fn().mockReturnValue(<h1>ErrorPage</h1>);
jest.mock('../components/error-page/error-page', () => MockedError);

describe('Given the componente AppRoutes', () => {
  const optionsMock: MenuOption[] = [
    { path: '/home', label: 'Home' },
    { path: '/register', label: 'Register' },
  ];
  const listPaths = (number: number) => {
    render(
      <Router
        initialEntries={['/home', '/register', '/*']}
        initialIndex={number}
      >
        <AppRoutes options={optionsMock}></AppRoutes>
      </Router>
    );
  };
  describe('When we render it with the route "/home"', () => {
    test('the component should render Home', async () => {
      await waitFor(async () => listPaths(0));
      const element = screen.getByText('Home');
      expect(element).toBeInTheDocument();
    });
    test('The Cards should be shown by the component', async () => {
      await waitFor(async () => listPaths(1));
      const element = screen.getByText('Register');
      expect(element).toBeInTheDocument();
    });

    test('The component should display the ErrorPage', async () => {
      await waitFor(async () => listPaths(2));
      const element = screen.getByText('ErrorPage');
      expect(element).toBeInTheDocument();
    });
  });
});
