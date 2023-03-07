import '@testing-library/jest-dom';

import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { describe, expect, test } from 'vitest';

import App from './App';
import { store } from './app/store';
import { theme01 } from './styles/theme';

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
