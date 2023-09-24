import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { Recipe } from '../../../model/recipes';
import { appStore } from '../../../store/store';
import { useUsers } from '../../../users/hooks/use.users';
import { useRecipes } from '../../hooks/use.recipes';
import { UserRecipeCard } from './users.recipe';

jest.mock('../../hooks/use.recipes');
jest.mock('../../../users/hooks/use.users');

describe('Given the componente UserRecipeCard', () => {
  const MockRecipe = { img: { url: 'test' } } as Recipe;

  (useRecipes as jest.Mock).mockReturnValue({
    deleteRecipes: jest.fn(),
  });

  (useUsers as jest.Mock).mockReturnValue({
    token: '',
  });

  describe('When we render it', () => {
    render(
      <Provider store={appStore}>
        <Router>
          <UserRecipeCard recipe={MockRecipe}></UserRecipeCard>
        </Router>
      </Provider>
    );
    test('the component should be in the document', () => {
      const element = screen.getByAltText('Receta');
      expect(element).toBeInTheDocument();
    });
  });
});
