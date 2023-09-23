import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { useRecipes } from '../../hooks/use.recipes';
import AddRecipe from './create.recipe';

jest.mock('../../hooks/use.recipes');

describe('Given the component Form', () => {
  describe('When we render it', () => {
    beforeEach(() => {
      render(
        <MemoryRouter>
          <Provider store={appStore}>
            <AddRecipe></AddRecipe>
          </Provider>
        </MemoryRouter>
      );
    });

    const addRecipes = jest.fn();

    (useRecipes as jest.Mock).mockReturnValue({ addRecipes: addRecipes });

    test('Then, the form should be completed and call the register function', async () => {
      const formElement = screen.getByRole('form');
      await act(() => fireEvent.submit(formElement));
      expect(useRecipes().addRecipes).toHaveBeenCalled();
    });
  });
});
