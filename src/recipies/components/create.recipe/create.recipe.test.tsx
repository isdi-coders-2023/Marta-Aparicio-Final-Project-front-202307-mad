import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';

import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import { MemoryRouter, useParams } from 'react-router-dom';
import { Recipe } from '../../../model/recipes';
import { appStore } from '../../../store/store';
import { useUsers } from '../../../users/hooks/use.users';
import { useRecipes } from '../../hooks/use.recipes';
import AddRecipe from './create.recipe';

jest.mock('../../hooks/use.recipes');
jest.mock('../../../users/hooks/use.users');
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useParams: jest.fn(),
}));

describe('Given the component Form', () => {
  const mockRecipe = {
    id: '1',
    ingredients: 'test',
  } as Recipe;

  (useRecipes as jest.Mock).mockReturnValue({
    recipes: [mockRecipe],
    addRecipes: jest.fn(),
    updateRecipes: jest.fn(),
  });

  (useUsers as jest.Mock).mockReturnValue({
    token: '',
  });

  describe('When we render it', () => {
    const mockPartialRecipe = {
      ingredients: 'test2',
    } as Partial<Recipe>;

    const renderBefore = () => {
      render(
        <MemoryRouter>
          <Provider store={appStore}>
            <AddRecipe></AddRecipe>
          </Provider>
        </MemoryRouter>
      );
    };

    test('Then, the form should be completed and call the addRecipe function', async () => {
      (useParams as jest.Mock).mockReturnValue({ id: null });
      renderBefore();
      const formElement = screen.getByRole('form');
      await act(() => fireEvent.submit(formElement));
      expect(useRecipes().addRecipes).toHaveBeenCalled();
    });
    test('Then, function handlesubmit should have been called', async () => {
      (useParams as jest.Mock).mockReturnValue({ id: '1' });
      renderBefore();
      const formElement = screen.getByLabelText('create-recipe');
      const inputElements = screen.getAllByRole('textbox');
      await userEvent.type(
        inputElements[0],
        mockPartialRecipe.ingredients as string
      );
      expect(inputElements[0]).toHaveValue(mockPartialRecipe.ingredients);
      await fireEvent.submit(formElement);
      expect(useRecipes().updateRecipes).toHaveBeenCalled();
    });
  });
});
