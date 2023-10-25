import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { useRecipes } from '../../hooks/use.recipes';
import UserRecipes from './users.recipes';

jest.mock('../../hooks/use.recipes');
jest.mock('../user.recipe/user.recipe');
jest.mock('../../../../config.ts', () => ({
  url: '',
}));
describe('Given the component Recipes', () => {
  const recipes = [
    { id: '1', author: { id: '1' }, img: { url: '' } },
    { id: '2', author: { id: '1' }, img: { url: '' } },
    { id: '3', author: { id: '1' }, img: { url: '' } },
    { id: '4', author: { id: '1' }, img: { url: '' } },
    { id: '5', author: { id: '1' }, img: { url: '' } },
    { id: '6', author: { id: '1' }, img: { url: '' } },
    { id: '7', author: { id: '1' }, img: { url: '' } },
  ];
  jest.spyOn(Storage.prototype, 'getItem');
  Storage.prototype.getItem = jest.fn().mockReturnValue('1');
  jest.spyOn(Array.prototype, 'filter');
  describe('When we render it', () => {
    const elementRendered = () => {
      render(
        <Provider store={appStore}>
          <Router>
            <UserRecipes></UserRecipes>
          </Router>
        </Provider>
      );
    };

    test('Then a list should be in the document', async () => {
      (useRecipes as jest.Mock).mockReturnValue({
        recipes: recipes,
        loadRecipes: jest.fn(),
        currentPage: 1,
        pageSize: 4,
        paginatedDataUser: recipes,
        loadState: 'loaded',
      });
      elementRendered();
      const element = screen.getByRole('list');
      await expect(element).toBeInTheDocument();
    });
  });
  describe('When we render it', () => {
    const elementRendered = () => {
      render(
        <Provider store={appStore}>
          <Router>
            <UserRecipes></UserRecipes>
          </Router>
        </Provider>
      );
    };
    test('Then a spinner should be in the document', async () => {
      (useRecipes as jest.Mock).mockReturnValue({
        recipes: recipes,
        loadRecipes: jest.fn(),
        currentPage: 1,
        pageSize: 4,
        paginatedDataUser: recipes,
        loadState: 'loading',
      });
      elementRendered();
      const element = screen.getByText('', { selector: '.spinner' });
      expect(element).toBeInTheDocument();
    });
  });
});
