import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { Logged } from '../../../types/logged';
import { useUsers } from '../../../users/hooks/use.users';
import { useRecipes } from '../../hooks/use.recipes';
import UserRecipes from './users.recipes';

jest.mock('../../hooks/use.recipes');
jest.mock('../../../users/hooks/use.users');
describe('Given the component Recipes', () => {
  const currentUser = {
    user: { id: '1' },
    token: '',
  } as Logged;
  describe('When we render it', () => {
    (useRecipes as jest.Mock).mockReturnValue({
      recipes: [{ author: { id: '1' }, img: { url: '' } }],
      loadRecipes: jest.fn(),
    });
    (useUsers as jest.Mock).mockReturnValue({
      currentUser,
    });
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <Router>
            <UserRecipes></UserRecipes>
          </Router>
        </Provider>
      );
    });
    test('Then a list should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
