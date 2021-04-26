import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { states as exampleStates } from '../constants/elevatorMachineStates';

import { IState } from '../@types/automaton';

export type IFloor = 'T' | '1' | '2' | '3' | '4';

interface ElevatorContextData {
  states: IState[];
  floor: IFloor;
  handleSelectFloor: (_: IFloor) => void;
  handleSelectDirection: (_: 'up' | 'down') => void;
  direction: 'up' | 'down';
}

const ElevatorContext = createContext<ElevatorContextData>(
  {} as ElevatorContextData,
);

interface ElevatorProviderProps {
  transitionTimer: number;
}

const ElevatorProvider: React.FC<ElevatorProviderProps> = ({ children }) => {
  const [states] = useState<IState[]>(exampleStates as IState[]);
  const [floor, setFloor] = useState<IFloor>('T');
  const [direction, setDirection] = useState<'up' | 'down'>('up');

  const handleSelectFloor = useCallback(
    (inputFloor: IFloor) => setFloor(inputFloor),
    [setFloor],
  );

  const handleSelectDirection = useCallback(
    (inputDirection: 'up' | 'down') => setDirection(inputDirection),
    [],
  );

  const handleStart = useCallback(
    (inputFloor: IFloor) => {
      const initialFloor = floor;
      handleSelectFloor(inputFloor);

      console.log('comecei');
    },
    [floor, handleSelectFloor],
  );

  const value = useMemo(
    () => ({
      states,
      floor,
      handleSelectFloor,
      handleSelectDirection,
      direction,
    }),
    [states, floor, handleSelectFloor, handleSelectDirection, direction],
  );

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
