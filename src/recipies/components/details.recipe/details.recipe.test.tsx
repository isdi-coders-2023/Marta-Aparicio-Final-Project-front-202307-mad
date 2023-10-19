import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter, useParams } from 'react-router-dom';
import { Recipe } from '../../../model/recipes';
import { appStore } from '../../../store/store';
import { useRecipes } from '../../hooks/use.recipes';
import Details from './details.recipe';

jest.mock('../../hooks/use.recipes');
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));
describe('Given the component court-reviews', () => {
  describe('When it is rendered', () => {
    const mockRecipe = [
      { id: '1', img: { url: 'test' }, ingredients: 'test', mode: 'test' },
      { id: '2', img: { url: 'test' }, ingredients: 'test', mode: 'test' },
    ] as unknown as Recipe[];

    jest.spyOn(Array.prototype, 'find');

    (useRecipes as jest.Mock).mockReturnValue({
      recipes: mockRecipe,
      loadRecipes: jest.fn(),
    });
    beforeEach(() => {
      (useParams as jest.Mock).mockReturnValue({ id: '1' });
      render(
        <MemoryRouter>
          <Provider store={appStore}>
            <Details></Details>
          </Provider>
        </MemoryRouter>
      );
    });

    test('Then, the image alt text should be Receta', () => {
      const receta = screen.getByAltText('Receta');
      expect(receta).toBeInTheDocument();
    });
    test('Then, loadRecipes should have been called', () => {
      expect(useRecipes().loadRecipes).toHaveBeenCalled();
    });
  });
});
