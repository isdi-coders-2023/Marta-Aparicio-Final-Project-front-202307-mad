import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { User } from '../../../model/user';
import { appStore } from '../../../store/store';
import { LoginForm } from './loginForm';

jest.mock('../../../config.ts', () => ({
  url: '',
}));
describe('Given the component Form', () => {
  beforeEach(() =>
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <LoginForm></LoginForm>
        </MemoryRouter>
      </Provider>
    )
  );
  describe('When we render it', () => {
    const mockUser = {
      userName: 'Juan',
      password: '1234',
    } as User;

    test('Then, send button should be in the document', () => {
      const element = screen.getByRole('button');
      expect(element.textContent).toBe('Login');
    });

    test('Then, function handlesubmit should have been called', async () => {
      const formElement = screen.getByRole('form');
      const inputElement = screen.getByRole('textbox');

      await userEvent.type(inputElement, mockUser.userName);

      expect(inputElement).toHaveValue(mockUser.userName);

      act(() => {
        fireEvent.submit(formElement);
      });
    });
  });
});
