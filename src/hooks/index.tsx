import React from 'react';
import { ThemeProvider } from 'styled-components';

import { AutomatonProvider } from './Automaton';

import theme from '../styles/theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <AutomatonProvider>{children}</AutomatonProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
