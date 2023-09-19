import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from './home';

describe('Given the componente Home', () => {
  describe('When we render it', () => {
    const title = '¡Bienvenid@ A YUMMY PIÑAMI!';
    render(<Home></Home>);
    test('the component should be in the document', () => {
      const element = screen.getByText(title);
      expect(element).toBeInTheDocument();
    });
  });
});
