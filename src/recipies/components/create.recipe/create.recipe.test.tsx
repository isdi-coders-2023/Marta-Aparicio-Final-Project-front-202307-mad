import '@testing-library/jest-dom';
import { act, fireEvent, render, screen } from '@testing-library/react';

import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { appStore } from '../../../store/store';
import { useUsers } from '../../../users/hooks/use.users';
import { useRecipes } from '../../hooks/use.recipes';
import AddRecipe from './create.recipe';

jest.mock('../../hooks/use.recipes');
jest.mock('../../../users/hooks/use.users');
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

    (useUsers as jest.Mock).mockReturnValue({ token: '' });
    (useRecipes as jest.Mock).mockReturnValue({
      addRecipes: jest.fn(),
      updateRecipes: jest.fn(),
      recipes: [],
    });

    test('Then, the form should be completed and call the addRecipe function', async () => {
      const formElement = screen.getByRole('form');
      await act(() => fireEvent.submit(formElement));
      expect(useRecipes().addRecipes).toHaveBeenCalled();
    });
  });
});
