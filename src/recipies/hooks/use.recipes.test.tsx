import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Provider, useDispatch } from 'react-redux';
import { Recipe } from '../../model/recipes';
import { appStore } from '../../store/store';
import { useRecipes } from './use.recipes';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

jest.spyOn(Math, 'ceil').mockReturnValue(3);

const useStateSpy = jest.spyOn(React, 'useState');

describe('Given the hook useRecipes', () => {
  const mockRecipeForm = {} as unknown as FormData;
  const mockRecipe = {} as unknown as Recipe;

  function MockComponent() {
    const {
      loadRecipes,
      addRecipes,
      deleteRecipes,
      updateRecipes,
      category,
      handleNextPage,
      handlePreviousPage,
    } = useRecipes();

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
        <button role="button" onClick={() => category('')}>
          5
        </button>
        <button role="button" onClick={() => handleNextPage()}>
          nextButton
        </button>
        <button role="button" onClick={() => handlePreviousPage()}>
          previousButton
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
    test('Then, if we click button 4, category should have been called', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[4]);
      expect(useDispatch()).toHaveBeenCalled();
    });
    test('handleNextPage updates currentPage correctly', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[5]);
      expect(useStateSpy).toHaveBeenCalled();
    });
    test('handlePreviousPage updates currentPage correctly', async () => {
      const buttons = screen.getAllByRole('button');
      await userEvent.click(buttons[5]);
      await userEvent.click(buttons[6]);
      expect(useStateSpy).toHaveBeenCalled();
    });
  });
});
