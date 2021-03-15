import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from '../styles/theme';

const AppProvider: React.FC = ({ children }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default AppProvider;
