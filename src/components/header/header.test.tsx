import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { useUsers } from '../../users/hooks/use.users';
import { Header } from './header';

jest.mock('../../users/hooks/use.users');
jest.mock('../../config.ts', () => ({
  url: '',
}));
describe('Given the componente Header', () => {
  (useUsers as jest.Mock).mockReturnValue({
    token: 'test',
    logout: jest.fn(),
  });
  describe('When we render it', () => {
    beforeEach(() => {
      render(
        <Router>
          <Provider store={appStore}>
            <Header></Header>
          </Provider>
        </Router>
      );
    });
    test('the component should be in the document', () => {
      const element = screen.getByRole('navigation');
      expect(element).toBeInTheDocument();
    });
    test('Then, when you click on the menu button', () => {
      const button = screen.getByRole('button');
      const menu = screen.getByRole('list', {});
      fireEvent.click(button);
      expect(menu).toHaveStyle({ right: '0%' });
    });
  });
});
describe('Given the componente Header without token', () => {
  describe('When we render it', () => {
    beforeEach(() => {
      (useUsers as jest.Mock).mockReturnValue({
        token: undefined,
      });
      render(
        <Router>
          <Provider store={appStore}>
            <Header></Header>
          </Provider>
        </Router>
      );
    });
    test('the component should be in the document', () => {
      const element = screen.getByRole('navigation');
      expect(element).toBeInTheDocument();
    });
  });
});
