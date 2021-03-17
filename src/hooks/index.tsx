import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AutomatonProvider } from './Automaton';
import { ToastProvider } from './Toast';

import theme from '../styles/theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <AutomatonProvider>{children}</AutomatonProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
