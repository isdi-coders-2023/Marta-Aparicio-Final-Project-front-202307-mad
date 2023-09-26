import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { Recipe } from '../../model/recipes';
import { appStore } from '../../store/store';
import { useRecipes } from './use.recipes';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

describe('Given the hook useRecipes', () => {
  const mockRecipeForm = {} as unknown as FormData;
  const mockRecipe = {} as unknown as Recipe;
  function MockComponent() {
    const { loadRecipes, addRecipes, updateRecipes, deleteRecipes } =
      useRecipes();

    return (
      <>
        <button role="button" onClick={() => loadRecipes()}>
          1
        </button>
        <button role="button" onClick={() => addRecipes(mockRecipeForm, '')}>
          2
        </button>
        <button role="button" onClick={() => updateRecipes(mockRecipe, '', '')}>
          3
        </button>
        <button role="button" onClick={() => deleteRecipes('', '')}>
          4
        </button>
      </>
    );
  }

  describe('When we press a button to run the hook', () => {
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <MockComponent></MockComponent>
        </Provider>
      );
    });

    test('Then, if we click button 1, loadRecipes should have been called', async () => {
      const buttons = screen.getAllByRole('button');

      await userEvent.click(buttons[0]);

      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then, if we click button 2, addRecipes should have been called', async () => {
      const buttons = screen.getAllByRole('button');

      await userEvent.click(buttons[1]);

      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then, if we click button 3, updateRecipes should have been called', async () => {
      const buttons = screen.getAllByRole('button');

      await userEvent.click(buttons[2]);

      expect(useDispatch()).toHaveBeenCalled();
    });
    test('Then, if we click button 4, deleteRecipes should have been called', async () => {
      const buttons = screen.getAllByRole('button');

      await userEvent.click(buttons[3]);

      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
