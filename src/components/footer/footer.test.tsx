import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';

describe('Given the componet PageError', () => {
  describe('When we render it', () => {
    render(<Footer></Footer>);
    const footer = screen.getByText('Yammy Piñami');
    test('the component should be in the document', () => {
      expect(footer).toBeInTheDocument();
    });
  });
});
