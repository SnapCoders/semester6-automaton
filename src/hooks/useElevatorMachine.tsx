import React, { createContext, useContext, useMemo, useState } from 'react';

import { states as exampleStates } from '../constants/elevatorMachineStates';

import { IState } from '../@types/automaton';

interface ElevatorContextData {
  states: IState[];
}

const ElevatorContext = createContext<ElevatorContextData>(
  {} as ElevatorContextData,
);

interface ElevatorProviderProps {
  transitionTimer: number;
}

const ElevatorProvider: React.FC<ElevatorProviderProps> = ({ children }) => {
  const [states] = useState<IState[]>(exampleStates as IState[]);

  const value = useMemo(() => ({ states }), [states]);

  return (
    <ElevatorContext.Provider value={value}>
      {children}
    </ElevatorContext.Provider>
  );
};

function useElevator(): ElevatorContextData {
  const context = useContext(ElevatorContext);

  return context;
}

export { ElevatorProvider, useElevator };
