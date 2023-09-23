import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ErrorPage from './error.page';

describe('Given the componet PageError', () => {
  describe('When we render it', () => {
    render(<ErrorPage></ErrorPage>);
    const home = screen.getByText('INICIO');
    test('the component should be in the document', () => {
      expect(home).toBeInTheDocument();
    });
  });
});
