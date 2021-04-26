import React from 'react';
import { ThemeProvider } from 'styled-components';

import { CandyMachineProvider } from './useCandyMachine';
import { ElevatorProvider } from './useElevatorMachine';
import { ToastProvider } from './useToast';

import theme from '../styles/theme';

const AppProvider: React.FC = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastProvider>
        <CandyMachineProvider>
          <ElevatorProvider transitionTimer={400}>{children}</ElevatorProvider>
        </CandyMachineProvider>
      </ToastProvider>
    </ThemeProvider>
  );
};

export default AppProvider;
