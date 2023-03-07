import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { describe, expect, test } from 'vitest';

import App from './App';

describe('App', () => {
  it('renders App component', () => {
    render(
      <Provider store={store}>
        <ThemeProvider theme={theme01}>
          <App />
        </ThemeProvider>
      </Provider>,
    );
    expect(screen.getByText('Ready to code!')).toBeInTheDocument();
  });
});
