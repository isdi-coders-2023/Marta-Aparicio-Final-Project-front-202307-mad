import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { User } from '../../../model/user';
import { appStore } from '../../../store/store';
import RegisterForm from './registerForm';

jest.mock('../../../../config.ts', () => ({
  url: '',
}));
describe('Given the component Form', () => {
  beforeEach(() =>
    render(
      <Provider store={appStore}>
        <MemoryRouter>
          <RegisterForm></RegisterForm>
        </MemoryRouter>
      </Provider>
    )
  );
  describe('When we render it', () => {
    const mockUser = {
      userName: 'Juan',
      password: '1234',
      email: '@',
    } as User;

    test('Then, send button should be in the document', () => {
      const element = screen.getByLabelText('register-button');
      expect(element.textContent).toBe('Enviar');
    });

    test('Then, function handlesubmit should have been called', async () => {
      const formElement = screen.getByLabelText('register');
      const inputElements = screen.getAllByRole('textbox');

      await userEvent.type(inputElements[0], mockUser.userName);

      expect(inputElements[0]).toHaveValue(mockUser.userName);
      act(() => {
        fireEvent.submit(formElement);
      });
    });
  });
});
