import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { Recipe } from '../../../model/recipes';
import { appStore } from '../../../store/store';
import { useRecipes } from '../../hooks/use.recipes';
import Details from './details.recipe';

jest.mock('../../hooks/use.recipes');

describe('Given the component court-reviews', () => {
  describe('When it is rendered', () => {
    const mockRecipe = [
      { id: '1', img: { url: 'test' }, ingredients: 'test', mode: 'test' },
    ] as unknown as Recipe[];

    jest.spyOn(Array.prototype, 'find').mockReturnValue({
      id: '1',
      img: { url: 'test' },
      ingredients: 'test',
      mode: 'test',
    });

    (useRecipes as jest.Mock).mockReturnValue({
      recipes: mockRecipe,
    });

    beforeEach(() => {
      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({
          id: '1',
        }),
      }));

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
  });
});
