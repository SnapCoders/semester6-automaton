import React, { createContext, useCallback, useContext, useState } from 'react';

import { updateStates } from '../utils/updateStates';

import { states as exampleStates } from '../constants/states';

import { useToast } from './Toast';

interface IInputState {
  stateFrom: string;
  stateTo: string;
  value: string | number;
}

interface ITransition {
  label: string;
  isActive?: boolean;
  transitionAs?:
    | 'loop'
    | 'leftToRight'
    | 'rightToLeft'
    | 'upToDown'
    | 'downToUp';
  width?: number;
  position?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  rotate?: number;
}

export interface IState {
  label: string;
  isActive?: boolean;
  isInitial?: boolean;
  isFinal?: boolean;
  transitions?: ITransition[];
}

interface AutomatonContextData {
  states: IState[];
  selectedValue: number;
  selectedCandy: string;
  handleStart: (_value: number, _candy: string) => void;
  handleSelectInput: (_value: number | string) => void;
  handleReset: () => void;
}

const AutomatonContext = createContext<AutomatonContextData>(
  {} as AutomatonContextData,
);

// 1,2,5,a,b,c
// 15A => q2 (Sem troco)
// 151B => q2 (Sem troco)
// 151A => q4 (Com troco)
// 151B => q5 (Sem troco)

// RESOLVIDOS: 15, 51, 25, 52, 55, 222, 2211, 11211, 115, (1122), 21111, (11112)

// 111111

// a = 6
// b = 7
// c = 8

// Sigma = 125ABC
// Sem troco = 111111A, 1111111B, 11111111C, 1111112C
//

const allPossibilities = {
  _01: '111 111 A', // SEM TROCO -<<=========
  _02: '111 111 5A', // COM TROCO
  _03: '111 111 5B', // COM TROCO
  _04: '111 111 5C', // COM TROCO
  _05: '111 111 1 B', // SEM TROCO -<<=========
  _06: '111 111 1 2A', // COM TROCO
  _07: '111 111 1 2B', // COM TROCO
  _08: '111 111 1 2C', // COM TROCO
  _09: '111 111 1 5A', // COM TROCO
  _10: '111 111 1 5B', // COM TROCO
  _11: '111 111 1 5C', // COM TROCO
  _12: '111 111 11 C', // SEM TROCO -<<=========
  _13: '111 111 11 1A', // COM TROCO
  _14: '111 111 11 1B', // COM TROCO
  _15: '111 111 11 1C', // COM TROCO
  _16: '111 111 11 2A', // COM TROCO
  _17: '111 111 11 2B', // COM TROCO
  _18: '111 111 11 2C', // COM TROCO
  _19: '111 111 11 5A', // COM TROCO
  _20: '111 111 11 5B', // COM TROCO
  _21: '111 111 11 5C', // COM TROCO
  _22: '111 111 2 C', // SEM TROCO -<<=========
  _23: '111 111 21 A', // COM TROCO
  _24: '111 111 22 B', // COM TROCO
  _25: '111 111 25 C', // COM TROCO
  _26: '111 111 5 A', // COM TROCO
  _27: '111 111 5 B', // COM TROCO
  _28: '111 111 5 C', // COM TROCO
  _29: '111 112 A', // COM TROCO
  _30: '111 112 B', // SEM TROCO -<<=========
  _31: '111 112 1C', // SEM TROCO -<<=========
  _32: '111 115 A', // COM TROCO
  _33: '111 115 B', // COM TROCO
  _34: '111 115 C', // COM TROCO
  _35: '111 12 A', // SEM TROCO -<<=========
  _36: '111 12 1B', // SEM TROCO -<<=========
  _37: '111 12 11C', // SEM TROCO -<<=========
  _38: '111 15 A', // COM TROCO
  _39: '111 15 B', // COM TROCO
  _40: '111 15 C', // COM TROCO
  _41: '111 21 A', // SEM TROCO -<<=========
  _42: '111 21 1B', // SEM TROCO -<<=========
  _43: '111 21 11C', // SEM TROCO -<<=========
  _44: '111 22 A', // COM TROCO
  _45: '111 22 B', // SEM TROCO -<<=========
  _46: '111 22 1C', // SEM TROCO -<<=========
  _47: '111 25 A', // COM TROCO
  _48: '111 25 B', // COM TROCO
  _49: '111 25 C', // COM TROCO
  _50: '111 5 A', // COM TROCO
  _51: '111 5 B', // COM TROCO
  _52: '111 5 C', // COM TROCO
  _53: '112 11 A', // SEM TROCO -<<=========
  _54: '112 11 1B', // SEM TROCO -<<=========
  _55: '112 11 11C', // SEM TROCO -<<=========
  _56: '112 2 A', // SEM TROCO -<<=========
  _57: '112 2 1B', // SEM TROCO -<<=========
  _58: '112 2 11C', // SEM TROCO -<<=========
  _59: '112 5 A', // COM TROCO
  _60: '112 5 B', // COM TROCO
  _61: '112 5 C', // COM TROCO
  _62: '115 A', // COM TROCO
  _63: '115 B', // SEM TROCO -<<=========
  _64: '115 1C', // SEM TROCO -<<=========
  _65: '121 11 A', // SEM TROCO -<<=========
  _66: '121 11 1B', // SEM TROCO -<<=========
  _67: '121 11 11C', // SEM TROCO -<<=========
  _68: '121 12 A', // COM TROCO
  _69: '121 12 B', // SEM TROCO -<<=========
  _70: '121 12 1C', // SEM TROCO -<<=========
  _71: '121 15 A', // COM TROCO
  _72: '121 15 B', // COM TROCO
  _73: '121 15 C', // COM TROCO
  _74: '121 21 A', // COM TROCO
  _75: '121 21 B', // SEM TROCO -<<=========
  _76: '121 21 1C', // SEM TROCO -<<=========
  _77: '121 5 A', // COM TROCO
  _78: '121 5 B', // COM TROCO
  _79: '121 5 C', // COM TROCO
  _80: '15 A', // SEM TROCO -<<=========
  _81: '15 1B', // SEM TROCO -<<=========
  _82: '15 11C', // SEM TROCO -<<=========
  _83: '51 A', // SEM TROCO -<<=========
  _84: '51 1B', // SEM TROCO -<<=========
  _85: '51 11C', // SEM TROCO -<<=========
};

export interface IUpdateState {
  label: string;
  isActive: boolean;
  transition?: { label: string; isActive: boolean };
}

interface AutomatonProviderProps {
  transitionTimer: number;
}

const AutomatonProvider: React.FC<AutomatonProviderProps> = ({
  transitionTimer,
  children,
}) => {
  const { addToast } = useToast();

  const [currentState, setCurrentState] = useState<string>('sI');

  const [states, setStates] = useState<IState[]>(exampleStates as IState[]);

  const [selectedCandy, setSelectedCandy] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<number>(0);

  const handleUpdateState = useCallback((state: IUpdateState) => {
    setStates(previousStates => updateStates(previousStates, state));
  }, []);

  const handleStart = useCallback(
    (value: number, candy: string) => {
      console.log(value, candy);

      if (!value) {
        console.log('Ops, selecione um valor para iniciar!');
        return;
      }

      if (!candy) {
        console.log('Ops, selecione um doce para iniciar!');
        return;
      }

      addToast({ title: 'Autômato iniciado!' });

      setTimeout(() => {
        handleUpdateState({
          label: 'sI',
          isActive: false,
          transition: { label: '1,2,5', isActive: true },
        });

        setTimeout(() => {
          handleUpdateState({
            label: 'sI',
            isActive: false,
            transition: { label: '1,2,5', isActive: false },
          });

          handleUpdateState({ label: 'q0', isActive: true });
        }, transitionTimer);
      }, transitionTimer);
    },
    [addToast, handleUpdateState, transitionTimer],
  );

  const initialTransition = useCallback(() => {
    setTimeout(() => {
      handleUpdateState({
        label: 'sI',
        isActive: false,
        transition: { label: '1,2,5', isActive: true },
      });

      setTimeout(() => {
        handleUpdateState({
          label: 'sI',
          isActive: false,
          transition: { label: '1,2,5', isActive: false },
        });

        handleUpdateState({ label: 'q0', isActive: true });

        setCurrentState('q0');
      }, transitionTimer);
    }, transitionTimer);
  }, [handleUpdateState, transitionTimer]);

  const transitate = useCallback(
    ({ stateFrom, stateTo, value }: IInputState) => {
      setTimeout(() => {
        handleUpdateState({
          label: stateFrom,
          isActive: false,
          transition: { label: String(value), isActive: true },
        });

        setTimeout(() => {
          handleUpdateState({
            label: stateFrom,
            isActive: false,
            transition: { label: String(value), isActive: false },
          });

          handleUpdateState({ label: stateTo, isActive: true });
        }, transitionTimer);
      }, transitionTimer);
    },
    [handleUpdateState, transitionTimer],
  );

  const handleSelectMoney = useCallback(
    (value: number) => {
      setSelectedValue(previousState => previousState + value);

      if (currentState === 'sI') {
        initialTransition();
      }

      if (value === 5) {
        transitate({ stateFrom: 'q0', stateTo: 'q1', value });
      }
    },
    [currentState, initialTransition, transitate],
  );

  const handleSelectCandy = useCallback(
    (value: string) => {
      if (selectedValue > 5) {
        if (value === 'A') setSelectedCandy(value);
        if (value === 'B' && selectedValue > 6) setSelectedCandy(value);
        if (value === 'C' && selectedValue >= 8) setSelectedCandy(value);
      }

      if (value === 'A') {
        transitate({ stateFrom: 'q1', stateTo: 'q2', value });
      }
    },
    [selectedValue, transitate],
  );

  const handleReset = useCallback(() => {
    setSelectedValue(0);
    setSelectedCandy('');
  }, []);

  const handleSelectInput = useCallback(
    (input: number | string) => {
      if (typeof input === 'string') {
        handleSelectCandy(input);
      }

      if (typeof input === 'number') {
        handleSelectMoney(input);
      }
    },
    [handleSelectCandy, handleSelectMoney],
  );

  return (
    <AutomatonContext.Provider
      value={{
        states,
        selectedValue,
        selectedCandy,
        handleStart,
        handleSelectInput,
        handleReset,
      }}
    >
      {children}
    </AutomatonContext.Provider>
  );
};

function useAutomaton(): AutomatonContextData {
  const context = useContext(AutomatonContext);

  return context;
}

export { AutomatonProvider, useAutomaton };
