import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider, useDispatch } from 'react-redux';
import { appStore } from '../../store/store';
import { useRecipes } from './use.recipes';

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn().mockReturnValue(jest.fn()),
}));

describe('Given the hook useWolves', () => {
  function MockComponent() {
    const { loadRecipes } = useRecipes();

    return (
      <>
        <button role="button" onClick={() => loadRecipes()}>
          1
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

    test('Then, if we click button 1, loadWolves should have been called', async () => {
      const button = screen.getByRole('button');

      await userEvent.click(button);

      expect(useDispatch()).toHaveBeenCalled();
    });
  });
});
