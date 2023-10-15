import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { useRecipes } from '../../hooks/use.recipes';
import UserRecipes from './users.recipes';

jest.mock('../../hooks/use.recipes');
jest.mock('../user.recipe/user.recipe');
describe('Given the component Recipes', () => {
  describe('When we render it', () => {
    jest.spyOn(Storage.prototype, 'getItem');
    Storage.prototype.getItem = jest.fn().mockReturnValue('1');
    beforeEach(async () => {
      await (useRecipes as jest.Mock).mockReturnValue({
        recipes: [
          { id: '1', author: { id: '1' }, img: { url: '' } },
          { id: '2', author: { id: '1' }, img: { url: '' } },
          { id: '3', author: { id: '1' }, img: { url: '' } },
          { id: '4', author: { id: '1' }, img: { url: '' } },
          { id: '5', author: { id: '1' }, img: { url: '' } },
        ],
        loadRecipes: jest.fn(),
        currentPage: 1,
        pageSize: 4,
      });
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
