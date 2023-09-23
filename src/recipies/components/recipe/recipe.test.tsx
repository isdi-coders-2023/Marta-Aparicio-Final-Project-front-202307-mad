import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { Recipe } from '../../../model/recipes';
import { appStore } from '../../../store/store';
import { RecipeCard } from './recipe';

describe('Given the componente Header', () => {
  const MockRecipe = { img: { url: 'test' } } as Recipe;
  describe('When we render it', () => {
    render(
      <Provider store={appStore}>
        <Router>
          <RecipeCard recipe={MockRecipe}></RecipeCard>
        </Router>
      </Provider>
    );
    test('the component should be in the document', () => {
      const element = screen.getByAltText('Receta');
      expect(element).toBeInTheDocument();
    });
  });
});
