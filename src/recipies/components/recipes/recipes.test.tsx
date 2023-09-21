import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../../store/store';
import Recipes from './recipes';

describe('Given the component Recipes', () => {
  describe('When we render it', () => {
    beforeEach(() => {
      render(
        <Provider store={appStore}>
          <Router>
            <Recipes></Recipes>
          </Router>
        </Provider>
      );
    });
    test('the component should be in the document', () => {
      const element = screen.getByRole('navigation');
      expect(element).toBeInTheDocument();
    });
    test('Then a list should be in the document', () => {
      const element = screen.getByRole('list');
      expect(element).toBeInTheDocument();
    });
  });
});
