import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { useRecipes } from '../../hooks/use.recipes';
import Recipes from './recipes';

jest.mock('../../hooks/use.recipes');
jest.mock('../../../../config.ts', () => ({
  url: '',
}));
describe('Given the component Recipes', () => {
  const recipes = [
    { id: 1, img: { url: '' } },
    { id: 2, img: { url: '' } },
    { id: 3, img: { url: '' } },
    { id: 4, img: { url: '' } },
    { id: 5, img: { url: '' } },
  ];
  describe('When we render it', () => {
    (useRecipes as jest.Mock).mockReturnValue({
      recipes: recipes,
      loadRecipes: jest.fn(),
      paginatedData: recipes,
      category: jest.fn(),
    });

    const renderedElement = () => {
      render(
        <Provider store={appStore}>
          <Router>
            <Recipes></Recipes>
          </Router>
        </Provider>
      );
    };

    test('the component should be in the document', () => {
      renderedElement();
      const element = screen.getByRole('navigation');
      expect(element).toBeInTheDocument();
    });
    test('Then a list should be in the document', () => {
      (useRecipes as jest.Mock).mockReturnValue({
        loadState: 'loaded',
        recipes: recipes,
        loadRecipes: jest.fn(),
        paginatedData: recipes,
        category: jest.fn(),
      });
      renderedElement();
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
    test('Then a spinner should be in the document', () => {
      (useRecipes as jest.Mock).mockReturnValue({
        loadState: 'loading',
        recipes: recipes,
        loadRecipes: jest.fn(),
        paginatedData: recipes,
        category: jest.fn(),
      });
      renderedElement();
      const element = screen.getByText('', { selector: '.spinner' });
      expect(element).toBeInTheDocument();
    });

    test('Then expect handleCategories to have been called with category', async () => {
      renderedElement();
      const selectElement = screen.queryAllByText('option');
      await userEvent.click(selectElement[1]);
      expect(selectElement).toEqual([]);
    });
    test('Then expect handleCategories to have been called with category', async () => {
      renderedElement();
      const selectElement = screen.getByTestId('select');
      await fireEvent.change(selectElement, { target: { value: 'Legumbres' } });
      let options = screen.getAllByRole('option');
      expect(options[0]).toBeInTheDocument();
    });
  });
});
