import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';

import { Recipe } from '../../../model/recipes';
import { appStore } from '../../../store/store';
import { useUsers } from '../../../users/hooks/use.users';
import { UserRecipeCard } from './user.recipe';

jest.mock('../../../users/hooks/use.users');
jest.mock('../../../../config.ts', () => ({
  url: '',
}));

describe('Given the componente UserRecipeCard', () => {
  const MockRecipe = { img: { url: 'test' } } as Recipe;
  const onDelete = jest.fn();

  (useUsers as jest.Mock).mockReturnValue({
    token: '',
  });

  describe('When we render it', () => {
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <Router>
            <UserRecipeCard
              onDelete={onDelete}
              recipe={MockRecipe}
            ></UserRecipeCard>
          </Router>
        </Provider>
      );
    });

    test('the component should be in the document', () => {
      const element = screen.getByAltText('Receta');
      expect(element).toBeInTheDocument();
    });
    test('the method onDelete should be called', async () => {
      const buttonElement = screen.getByRole('button');
      await fireEvent.click(buttonElement);
      expect(onDelete).toHaveBeenCalled();
    });
  });
});
