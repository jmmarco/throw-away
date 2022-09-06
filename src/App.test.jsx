import { render, screen } from '@testing-library/react';
import React from 'react';
import App from './App';

// eslint-disable-next-line no-undef
test('renders learn react link', () => {
  render(<App />);
  const text = screen.getByText(/Welcome to new app!/i);
  // eslint-disable-next-line no-undef
  expect(text).toBeInTheDocument();
});
