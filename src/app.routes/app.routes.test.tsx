import '@testing-library/jest-dom';
import { act, render, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import { AppRoutes } from './app.routes';
describe('When it is instantiated with a route /', () => {
  const MockedHome = jest.fn().mockReturnValue(<h1>Home</h1>);
  jest.mock('../components/home/home', () => MockedHome);

  let element: HTMLElement;

  beforeEach(async () => {
    await act(async () =>
      render(
        <Router initialEntries={['/']} initialIndex={0}>
          <AppRoutes></AppRoutes>
        </Router>
      )
    );

    element = screen.getByText('Home');
  });
  test.only('Then it should render Home', () => {
    expect(MockedHome).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});

describe('When it is instantiated with a route /', () => {
  const MockedRegister = jest.fn().mockReturnValue(<h1>Register</h1>);
  jest.mock(
    '../users/components/registerUser/registerForm',
    () => MockedRegister
  );

  let element: HTMLElement;

  beforeEach(async () => {
    await act(async () =>
      render(
        <Router initialEntries={['/login']} initialIndex={0}>
          <AppRoutes></AppRoutes>
        </Router>
      )
    );

    element = screen.getByText('Register');
  });
  test.only('Then it should render Register', () => {
    expect(MockedRegister).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});

describe('When it is instantiated with a route /', () => {
  const MockedError = jest.fn().mockReturnValue(<h1>ErrorPage</h1>);
  jest.mock('../components/error-page/error-page', () => MockedError);

  let element: HTMLElement;

  beforeEach(async () => {
    await act(async () =>
      render(
        <Router initialEntries={['/*']} initialIndex={0}>
          <AppRoutes></AppRoutes>
        </Router>
      )
    );

    element = screen.getByText('ErrorPage');
  });
  test('Then it should render ErrorPage', () => {
    expect(MockedError).toHaveBeenCalled();
    expect(element).toBeInTheDocument();
  });
});
