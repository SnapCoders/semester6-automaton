import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

import { useToast } from './useToast';

import { delay, transitate, updateStates } from '../utils';
import { ITransitate } from '../utils/transitate';

import { states as exampleStates } from '../constants/elevatorMachineStates';

import {
  IState,
  IInputState,
  IShowToast,
  IUpdateState,
} from '../@types/automaton';

export type IFloor = 'T' | '1' | '2' | '3' | '4';

export type IPersonNames = 'person1' | 'person2' | 'person3' | 'person4';

export type IPersonStatus = 'inFloor' | 'WaitingElevator' | 'OnElevator';

interface IUpdatePerson {
  leftPosition?: number;
  value?: IFloor;
  isHidden?: boolean;
}

export interface IPerson {
  name: IPersonNames;
  floor: IFloor | undefined;
  isHidden?: boolean;
  status?: IPersonStatus;
  topPosition?: number;
  leftPosition?: number;
}

interface ElevatorContextData {
  states: IState[];
  persons: IPerson[];
  floor: IFloor;
  selectedPerson: IPerson | undefined;
  isElevatorDoorOpen: boolean;
  handleSelectFloor: (_: IFloor) => void;
  handleSelectPerson: (_: IPerson) => void;
  setIsElevatorDoorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setPersons: React.Dispatch<React.SetStateAction<IPerson[]>>;
}

const ElevatorContext = createContext<ElevatorContextData>(
  {} as ElevatorContextData,
);

interface ElevatorProviderProps {
  transitionTimer: number;
}

const ElevatorProvider: React.FC<ElevatorProviderProps> = ({ children }) => {
  const { addToast } = useToast();

  const [states, setStates] = useState<IState[]>(exampleStates as IState[]);

  const [, setCurrentState] = useState<string>('sI');

  const [floor, setFloor] = useState<IFloor>('T');
  const [selectedPerson, setSelectedPerson] = useState<IPerson | undefined>();

  const [isElevatorDoorOpen, setIsElevatorDoorOpen] = useState<boolean>(false);

  const [persons, setPersons] = useState<IPerson[]>([
    { name: 'person1', floor: '3', isHidden: true },
    { name: 'person2', floor: '2', isHidden: true },
    { name: 'person3', floor: '1', isHidden: true },
    { name: 'person4', floor: 'T' },
  ]);

  const updateState = useCallback(
    (state: IUpdateState) => {
      setStates(previousStates => updateStates(previousStates, state));
    },
    [setStates],
  );

  const showMessage = useCallback(
    ({ message, stateTo }: IShowToast) => {
      if (message) {
        if (stateTo === 'st') {
          addToast({
            title: `Doce ${message.candy} comprado!`,
            description: 'Voce não obteve nenhum troco!',
            type: 'success',
          });
        }
      }
    },
    [addToast],
  );

  const bind = useCallback(
    (inputState: IInputState): ITransitate => {
      return {
        inputState: { ...inputState },
        setCurrentState,
        showMessage,
        updateState,
      };
    },
    [updateState, showMessage],
  );

  const updatePerson = useCallback(
    ({ leftPosition, isHidden, value }: IUpdatePerson) => {
      setPersons(previousPersons => {
        const personIndex = previousPersons.findIndex(
          person => person.name === selectedPerson?.name,
        );

        const updatedPersons = previousPersons;

        updatedPersons[personIndex] = {
          ...updatedPersons[personIndex],
          leftPosition,
          floor: value || selectedPerson?.floor,
          isHidden,
        };

        return updatedPersons;
      });

      setSelectedPerson(state => {
        if (!state) return undefined;

        return { ...state, floor: value };
      });
    },
    [selectedPerson, setPersons, setSelectedPerson],
  );

  const handleSelectFloor = useCallback(
    async (value: IFloor) => {
      updatePerson({ leftPosition: 230 });

      await delay(1000);
      setIsElevatorDoorOpen(true);

      await delay(1000);
      updatePerson({ leftPosition: 300 });

      await delay(1000);
      setIsElevatorDoorOpen(false);

      await delay(1000);

      setFloor(value);
      updatePerson({ leftPosition: 300, isHidden: true, value });

      if (floor === 'T') {
        if (value === '1') {
          transitate(bind({ stateFrom: 'sI', stateTo: 'ta', value: '0' }));

          await delay(1000);
          transitate(bind({ stateFrom: 'ta', stateTo: 'tf', value: '0' }));

          await delay(1000);
          transitate(bind({ stateFrom: 'tf', stateTo: '1f', value: '1' }));

          await delay(1000);
          transitate(bind({ stateFrom: '1f', stateTo: '1a', value: '0' }));
        }

        if (value === '2') {
          transitate(bind({ stateFrom: 'sI', stateTo: 'ta', value: '0' }));

          await delay(1000);
          transitate(bind({ stateFrom: 'ta', stateTo: 'tf', value: '0' }));

          await delay(1000);
          transitate(bind({ stateFrom: 'tf', stateTo: '1f', value: '1' }));

          await delay(1000);
          transitate(bind({ stateFrom: '1f', stateTo: '2f', value: '1' }));

          await delay(1000);
          transitate(bind({ stateFrom: '2f', stateTo: '2a', value: '0' }));
        }

        if (value === '3') {
          transitate(bind({ stateFrom: 'sI', stateTo: 'ta', value: '0' }));

          await delay(1000);
          transitate(bind({ stateFrom: 'ta', stateTo: 'tf', value: '0' }));

          await delay(1000);
          transitate(bind({ stateFrom: 'tf', stateTo: '1f', value: '1' }));

          await delay(1000);
          transitate(bind({ stateFrom: '1f', stateTo: '2f', value: '1' }));

          await delay(1000);
          transitate(bind({ stateFrom: '2f', stateTo: '3f', value: '1' }));

          await delay(1000);
          transitate(bind({ stateFrom: '3f', stateTo: '3a', value: '0' }));
        }
      }

      if (floor === '1') {
        transitate(bind({ stateFrom: 'sI', stateTo: '1a', value: '1' }));
        await delay(1000);

        if (value === 'T') {
          transitate(bind({ stateFrom: '1a', stateTo: '1f', value: '0' }));

          await delay(1000);
          transitate(bind({ stateFrom: '1f', stateTo: 'tf', value: '2' }));

          await delay(1000);
          transitate(bind({ stateFrom: 'tf', stateTo: 'ta', value: '0' }));
        }

        if (value === '2') {
          transitate(bind({ stateFrom: '1a', stateTo: '1f', value: '0' }));

          await delay(1000);
          transitate(bind({ stateFrom: '1f', stateTo: '2f', value: '1' }));

          await delay(1000);
          transitate(bind({ stateFrom: '2f', stateTo: '2a', value: '0' }));
        }

        if (value === '3') {
          transitate(bind({ stateFrom: '1a', stateTo: '1f', value: '0' }));

          await delay(1000);
          transitate(bind({ stateFrom: '1f', stateTo: '2f', value: '1' }));

          await delay(1000);
          transitate(bind({ stateFrom: '2f', stateTo: '3f', value: '1' }));

          await delay(1000);
          transitate(bind({ stateFrom: '3f', stateTo: '3a', value: '0' }));
        }
      }

      if (floor === '2') {
        transitate(bind({ stateFrom: 'sI', stateTo: '2a', value: '2' }));
        await delay(1000);
        transitate(bind({ stateFrom: '2a', stateTo: '2f', value: '0' }));
        await delay(1000);

        if (value === 'T') {
          transitate(bind({ stateFrom: '2f', stateTo: '1f', value: '2' }));

          await delay(1000);
          transitate(bind({ stateFrom: '1f', stateTo: 'tf', value: '2' }));

          await delay(1000);
          transitate(bind({ stateFrom: 'tf', stateTo: 'ta', value: '0' }));
        }

        if (value === '1') {
          await delay(1000);
          transitate(bind({ stateFrom: '2f', stateTo: '1f', value: '2' }));

          await delay(1000);
          transitate(bind({ stateFrom: '1f', stateTo: '1a', value: '0' }));
        }

        if (value === '3') {
          transitate(bind({ stateFrom: '2f', stateTo: '3f', value: '1' }));

          await delay(1000);
          transitate(bind({ stateFrom: '3f', stateTo: '3a', value: '0' }));
        }
      }

      if (floor === '3') {
        transitate(bind({ stateFrom: 'sI', stateTo: '3a', value: '3' }));
        await delay(1000);
        transitate(bind({ stateFrom: '3a', stateTo: '3f', value: '0' }));
        await delay(1000);
        transitate(bind({ stateFrom: '3f', stateTo: '2f', value: '2' }));
        await delay(1000);

        if (value === 'T') {
          transitate(bind({ stateFrom: '2f', stateTo: '1f', value: '2' }));

          await delay(1000);
          transitate(bind({ stateFrom: '1f', stateTo: 'tf', value: '2' }));

          await delay(1000);
          transitate(bind({ stateFrom: 'tf', stateTo: 'ta', value: '0' }));
        }

        if (value === '1') {
          transitate(bind({ stateFrom: '2f', stateTo: '1f', value: '2' }));

          await delay(1000);
          transitate(bind({ stateFrom: '1f', stateTo: '1a', value: '0' }));
        }

        if (value === '2') {
          await delay(1000);
          transitate(bind({ stateFrom: '2f', stateTo: '2a', value: '0' }));
        }
      }

      updatePerson({ leftPosition: 300, isHidden: false, value });
      setIsElevatorDoorOpen(true);

      await delay(1000);

      updatePerson({ leftPosition: 230, isHidden: false, value });
    },
    [bind, floor, updatePerson],
  );

  const handleSelectPerson = useCallback(
    (inputPerson: IPerson) => setSelectedPerson(inputPerson),
    [setSelectedPerson],
  );

  const value = useMemo(
    () => ({
      states,
      floor,
      selectedPerson,
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
      selectedPerson,
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
