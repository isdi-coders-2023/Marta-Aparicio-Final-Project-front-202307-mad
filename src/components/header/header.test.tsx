import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from 'react-router-dom';
import { appStore } from '../../store/store';
import { Header } from './header';

describe('Given the componente Header', () => {
  describe('When we render it', () => {
    render(
      <Provider store={appStore}>
        <Router>
          <Header></Header>
        </Router>
      </Provider>
    );
    test('the component should be in the document', () => {
      const element = screen.getByRole('navigation');
      expect(element).toBeInTheDocument();
    });
  });
});
