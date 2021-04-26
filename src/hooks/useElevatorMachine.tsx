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

export type IPersonNames = 'person1' | 'person2' | 'person3' | 'person4';

export type IPersonStatus = 'inFloor' | 'WaitingElevator' | 'OnElevator';

export interface IPerson {
  name: IPersonNames;
  floor: IFloor;
  isShow?: boolean;
  status?: IPersonStatus;
  topPosition?: number;
  leftPosition?: number;
}

interface ElevatorContextData {
  states: IState[];
  floor: IFloor;
  handleSelectFloor: (_: IFloor) => void;
  handleSelectPerson: (_: IPerson) => void;
  isElevatorDoorOpen: boolean;
  setIsElevatorDoorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  persons: IPerson[];
  setPersons: React.Dispatch<React.SetStateAction<IPerson[]>>;
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
  const [, setSelectedPerson] = useState<IPerson>();

  const [isElevatorDoorOpen, setIsElevatorDoorOpen] = useState<boolean>(false);

  const [persons, setPersons] = useState<IPerson[]>([
    { name: 'person1', floor: '3' },
    { name: 'person2', floor: '2' },
    { name: 'person3', floor: '1' },
    { name: 'person4', floor: 'T' },
  ]);

  // left: 230px;
  // left: 300px;

  const handleSelectFloor = useCallback(
    (inputFloor: IFloor) => setFloor(inputFloor),
    [setFloor],
  );

  const handleSelectPerson = useCallback(
    (inputPerson: IPerson) => setSelectedPerson(inputPerson),
    [setSelectedPerson],
  );

  // const handleStart = useCallback(
  //   (inputFloor: IFloor) => {
  //     handleSelectFloor(inputFloor);
  //   },
  //   [handleSelectFloor],
  // );

  const value = useMemo(
    () => ({
      states,
      floor,
      persons,
      isElevatorDoorOpen,
      setPersons,
      handleSelectFloor,
      handleSelectPerson,
      setIsElevatorDoorOpen,
    }),
    [
      states,
      floor,
      persons,
      isElevatorDoorOpen,
      setPersons,
      handleSelectFloor,
      handleSelectPerson,
      setIsElevatorDoorOpen,
    ],
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
