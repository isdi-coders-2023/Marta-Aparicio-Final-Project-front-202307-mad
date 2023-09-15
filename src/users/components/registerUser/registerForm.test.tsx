import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { User } from '../../../model/user';
import { appStore } from '../../../store/store';
import { RegisterForm } from './registerForm';

describe('Given the component Form', () => {
  beforeEach(() =>
    render(
      <Provider store={appStore}>
        <RegisterForm></RegisterForm>
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
      const element = screen.getByRole('button');
      expect(element.textContent).toBe('Enviar');
    });

    test('Then, function handlesubmit should have been called', async () => {
      const formElement = screen.getByRole('form');
      const inputElements = screen.getAllByRole('textbox');

      await userEvent.type(inputElements[0], mockUser.userName);

      expect(inputElements[0]).toHaveValue(mockUser.userName);

      await fireEvent.submit(formElement);
    });
  });
});
