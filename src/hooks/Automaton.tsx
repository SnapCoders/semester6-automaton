import React, { createContext, useCallback, useContext, useState } from 'react';

// TO-DO : NÃO ESQUECER DE CRIAR A ROTA DE q5 PARA st

import { updateStates } from '../utils/updateStates';

import { states as exampleStates } from '../constants/states';
import { products as exampleProducts } from '../constants/products';

import { useToast } from './Toast';

interface IInputState {
  stateFrom: string;
  stateTo: string;
  value: string | number;
  message?: { change: number; candy: string };
}

interface ITransition {
  label: string;
  isActive?: boolean;
  transitionAs?:
    | 'loop'
    | 'leftToRight'
    | 'rightToLeft'
    | 'upToDown'
    | 'downToUp'
    | 'straight';
  width?: number;
  positions?: {
    line: {
      top?: number;
      left?: number;
    };
    label: {
      top?: number;
      left?: number;
    };
  };
  rotations?: {
    line: number;
    label: number;
  };
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
      addToast({ title: 'Autômato iniciado!' });

      console.log(value, candy);

      // COLOCAR A ANIMAÇÃO DO DOCE CAINDO E DA MOEDA ENTRANDO NA MÁQUINA E CAINDO
    },
    [addToast],
  );

  const transitate = useCallback(
    ({ stateFrom, stateTo, value, message }: IInputState) => {
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

          setCurrentState(stateTo);

          if (message) {
            if (stateTo === 'st') {
              addToast({
                title: `Doce ${message.candy} comprado!`,
                description: 'Voce não obteve nenhum troco!',
                type: 'success',
              });
            }

            if (stateTo === 'ct') {
              const product = exampleProducts.find(
                item => item.label === message.candy,
              );

              if (product) {
                const calculate = message.change - product.price;

                addToast({
                  title: `Doce ${message.candy} comprado!`,
                  description: `Voce obteve um troco de R$ ${calculate} do Doce ${message.candy}!`,
                  type: 'success',
                });
              }
            }
          }
        }, transitionTimer);
      }, transitionTimer);
    },
    [addToast, handleUpdateState, setCurrentState, transitionTimer],
  );

  const handleSelectMoney = useCallback(
    (value: number) => {
      setSelectedValue(previousState => previousState + value);

      const stateFrom = currentState;

      if (currentState === 'sI') {
        if (value === 1) transitate({ stateFrom, stateTo: 'q0', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'q3', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'q5', value });
      }

      if (currentState === 'q0') {
        if (value === 1) transitate({ stateFrom, stateTo: 'q3', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'q4', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'q2', value });
      }

      if (currentState === 'q1') {
        if (value === 1) transitate({ stateFrom, stateTo: 'q5', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'q2', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'q8', value });
      }

      if (currentState === 'q2') {
        if (value === 1) transitate({ stateFrom, stateTo: 'q7', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'q6', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'q8', value });
      }

      if (currentState === 'q3') {
        if (value === 1) transitate({ stateFrom, stateTo: 'q4', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'q1', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'q7', value });
      }

      if (currentState === 'q4') {
        if (value === 1) transitate({ stateFrom, stateTo: 'q1', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'q5', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'q6', value });
      }

      if (currentState === 'q5') {
        if (value === 1) transitate({ stateFrom, stateTo: 'q2', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'q7', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'q8', value });
      }

      if (currentState === 'q6') {
        if (value === 1) transitate({ stateFrom, stateTo: 'q8', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'q8', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'q8', value });
      }

      if (currentState === 'q7') {
        if (value === 1) transitate({ stateFrom, stateTo: 'q9', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'q8', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'q8', value });
      }

      if (currentState === 'q9') {
        if (value === 1) transitate({ stateFrom, stateTo: 'q8', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'q8', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'q8', value });
      }

      if (currentState === 'ct') {
        if (value === 1) transitate({ stateFrom, stateTo: 'ct', value });
        if (value === 2) transitate({ stateFrom, stateTo: 'ct', value });
        if (value === 5) transitate({ stateFrom, stateTo: 'ct', value });
      }
    },
    [currentState, transitate],
  );

  const handleSelectCandy = useCallback(
    (value: string) => {
      if (selectedValue > 5) {
        if (value === 'A') setSelectedCandy(value);
        if (value === 'B' && selectedValue > 6) setSelectedCandy(value);
        if (value === 'C' && selectedValue >= 8) setSelectedCandy(value);
      }

      const stateFrom = currentState;

      const candy = value;
      const change = selectedValue;

      const message = { candy, change };

      if (currentState === 'q2') {
        if (value === 'A')
          transitate({ stateFrom, stateTo: 'st', value, message });
      }

      if (currentState === 'q6') {
        if (value === 'A')
          transitate({ stateFrom, stateTo: 'ct', value, message });
        if (value === 'B')
          transitate({ stateFrom, stateTo: 'ct', value, message });
        if (value === 'C')
          transitate({ stateFrom, stateTo: 'st', value, message });
      }

      if (currentState === 'q7') {
        if (value === 'A')
          transitate({ stateFrom, stateTo: 'ct', value, message });
        if (value === 'B')
          transitate({ stateFrom, stateTo: 'st', value, message });
      }

      if (currentState === 'q8') {
        if (value === 'A')
          transitate({ stateFrom, stateTo: 'ct', value, message });
        if (value === 'B')
          transitate({ stateFrom, stateTo: 'ct', value, message });
        if (value === 'C')
          transitate({ stateFrom, stateTo: 'ct', value, message });
      }

      if (currentState === 'q9') {
        if (value === 'A')
          transitate({ stateFrom, stateTo: 'ct', value, message });
        if (value === 'B')
          transitate({ stateFrom, stateTo: 'ct', value, message });
        if (value === 'C')
          transitate({ stateFrom, stateTo: 'st', value, message });
      }
    },
    [selectedValue, currentState, transitate],
  );

  const handleReset = useCallback(() => {
    setSelectedValue(0);
    setSelectedCandy('');

    if (currentState === 'ct')
      transitate({ stateFrom: 'ct', stateTo: 'sI', value: 0 });
    if (currentState === 'st')
      transitate({ stateFrom: 'st', stateTo: 'sI', value: 0 });

    setCurrentState('sI');
  }, [currentState, transitate]);

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
