import React, { createContext, useCallback, useContext, useState } from 'react';

import { transitate, updateStates } from '../utils';
import { ITransitate } from '../utils/transitate';

import { states as exampleStates } from '../constants/candyMachineStates';
import { products as exampleProducts } from '../constants/products';

import {
  IInputState,
  IState,
  IShowToast,
  IUpdateState,
} from '../@types/automaton';

import { useToast } from './useToast';

interface CandyMachineContextData {
  states: IState[];
  selectedValue: number;
  selectedCandy: string;
  inputCoinRight?: number;
  inputCoinVisible: number;
  outputCoinTop?: number;
  outputCoinVisible: number;
  selectedCandyRotate?: number;
  selectedCandyRotateX?: number;
  selectedCandyRotateY?: number;
  selectedCandyTop?: number;
  selectedCandyLabel?: string | undefined;
  isBlockedMoney?: boolean;
  handleStart: () => void;
  handleSelectInput: (_value: number | string, _candyLabel?: string) => void;
  handleReset: () => void;
}

const CandyMachineContext = createContext<CandyMachineContextData>(
  {} as CandyMachineContextData,
);

const CandyMachineProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();

  const [currentState, setCurrentState] = useState<string>('sI');
  const [inputCoinRight, setInputCoinRight] = useState<number>(0);
  const [inputCoinVisible, setInputCoinVisible] = useState<number>(1);
  const [outputCoinTop, setOutputCoinTop] = useState<number>(0);
  const [outputCoinVisible, setOutputCoinVisible] = useState<number>(0);
  const [selectedCandyRotate, setSelectedCandyRotate] = useState<number>(0);
  const [selectedCandyRotateX, setSelectedCandyRotateX] = useState<number>(0);
  const [selectedCandyRotateY, setSelectedCandyRotateY] = useState<number>(0);
  const [selectedCandyTop, setSelectedCandyTop] = useState<number>(0);
  const [selectedCandyLabel, setSelectedCandyLabel] = useState<string>();
  const [hasCashBack, setHasCashBack] = useState<boolean>(false);

  const [states, setStates] = useState<IState[]>(exampleStates as IState[]);

  const [selectedCandy, setSelectedCandy] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<number>(0);

  const [isBlockedMoney, setIsBlockedMoney] = useState<boolean>(false);

  const updateState = useCallback(
    (state: IUpdateState) => {
      setStates(previousStates => updateStates(previousStates, state));
    },
    [setStates],
  );

  const showMessage = useCallback(
    ({ message, stateTo }: IShowToast) => {
      setIsBlockedMoney(false);

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

            if (calculate > 0) setHasCashBack(true);

            addToast({
              title: `Doce ${message.candy} comprado!`,
              description: `Voce obteve um troco de R$ ${calculate} do Doce ${message.candy}!`,
              type: 'success',
            });
          }
        }
      }
    },
    [addToast],
  );

  const candyAnimation = useCallback(() => {
    setTimeout(() => setSelectedCandyRotate(-8), 200);
    setTimeout(() => setSelectedCandyRotate(2), 400);
    setTimeout(() => setSelectedCandyRotate(-10), 600);
    setTimeout(() => setSelectedCandyRotate(4), 600);
    setTimeout(() => setSelectedCandyRotate(-14), 800);
    setTimeout(() => setSelectedCandyRotate(6), 1000);
    setTimeout(() => setSelectedCandyRotate(-20), 1200);

    setTimeout(() => {
      setSelectedCandyRotate(45);
      setSelectedCandyRotateX(49);
      setSelectedCandyRotateY(-17);
    }, 1400);

    setTimeout(() => setSelectedCandyTop(496), 1600);
  }, []);

  const coinAnimation = useCallback(() => {
    setTimeout(() => {
      setInputCoinVisible(0);

      if (hasCashBack) {
        setOutputCoinVisible(1);
        setOutputCoinTop(2);

        setTimeout(() => {
          setOutputCoinTop(52);

          setTimeout(() => {
            setOutputCoinTop(2);

            setTimeout(() => setOutputCoinTop(52), 200);
          }, 200);
        }, 200);
      }
    }, 500);
  }, [hasCashBack]);

  const handleStart = useCallback(() => {
    setInputCoinRight(24);

    candyAnimation();

    coinAnimation();
  }, [candyAnimation, coinAnimation]);

  const bind = useCallback(
    (inputState: Omit<IInputState, 'stateFrom'>): ITransitate => {
      return {
        inputState: { ...inputState, stateFrom: currentState },
        setCurrentState,
        showMessage,
        updateState,
      };
    },
    [currentState, updateState, showMessage],
  );

  const handleSelectMoney = useCallback(
    (value: number) => {
      setIsBlockedMoney(true);

      setSelectedValue(previousState => previousState + value);

      if (currentState === 'sI') {
        if (value === 1) transitate(bind({ stateTo: 'q0', value }));
        if (value === 2) transitate(bind({ stateTo: 'q3', value }));
        if (value === 5) transitate(bind({ stateTo: 'q5', value }));
      }

      if (currentState === 'q0') {
        if (value === 1) transitate(bind({ stateTo: 'q3', value }));
        if (value === 2) transitate(bind({ stateTo: 'q4', value }));
        if (value === 5) transitate(bind({ stateTo: 'q2', value }));
      }

      if (currentState === 'q1') {
        if (value === 1) transitate(bind({ stateTo: 'q5', value }));
        if (value === 2) transitate(bind({ stateTo: 'q2', value }));
        if (value === 5) transitate(bind({ stateTo: 'q8', value }));
      }

      if (currentState === 'q2') {
        if (value === 1) transitate(bind({ stateTo: 'q7', value }));
        if (value === 2) transitate(bind({ stateTo: 'q6', value }));
        if (value === 5) transitate(bind({ stateTo: 'q8', value }));
      }

      if (currentState === 'q3') {
        if (value === 1) transitate(bind({ stateTo: 'q4', value }));
        if (value === 2) transitate(bind({ stateTo: 'q1', value }));
        if (value === 5) transitate(bind({ stateTo: 'q7', value }));
      }

      if (currentState === 'q4') {
        if (value === 1) transitate(bind({ stateTo: 'q1', value }));
        if (value === 2) transitate(bind({ stateTo: 'q5', value }));
        if (value === 5) transitate(bind({ stateTo: 'q6', value }));
      }

      if (currentState === 'q5') {
        if (value === 1) transitate(bind({ stateTo: 'q2', value }));
        if (value === 2) transitate(bind({ stateTo: 'q7', value }));
        if (value === 5) transitate(bind({ stateTo: 'q8', value }));
      }

      if (currentState === 'q6') {
        if (value === 1) transitate(bind({ stateTo: 'q8', value }));
        if (value === 2) transitate(bind({ stateTo: 'q8', value }));
        if (value === 5) transitate(bind({ stateTo: 'q8', value }));
      }

      if (currentState === 'q7') {
        if (value === 1) transitate(bind({ stateTo: 'q9', value }));
        if (value === 2) transitate(bind({ stateTo: 'q8', value }));
        if (value === 5) transitate(bind({ stateTo: 'q8', value }));
      }

      if (currentState === 'q9') {
        if (value === 1) transitate(bind({ stateTo: 'q8', value }));
        if (value === 2) transitate(bind({ stateTo: 'q8', value }));
        if (value === 5) transitate(bind({ stateTo: 'q8', value }));
      }

      if (currentState === 'ct') {
        if (value === 1) transitate(bind({ stateTo: 'ct', value }));
        if (value === 2) transitate(bind({ stateTo: 'ct', value }));
        if (value === 5) transitate(bind({ stateTo: 'ct', value }));
      }
    },
    [currentState, bind],
  );

  const handleSelectCandy = useCallback(
    (value: string) => {
      setIsBlockedMoney(true);

      if (selectedValue > 5) {
        if (value === 'A') setSelectedCandy(value);
        if (value === 'B' && selectedValue > 6) setSelectedCandy(value);
        if (value === 'C' && selectedValue >= 8) setSelectedCandy(value);
      }

      const candy = value;
      const change = selectedValue;

      const message = { candy, change };

      if (currentState === 'q2') {
        if (value === 'A') transitate(bind({ stateTo: 'st', value, message }));
      }

      if (currentState === 'q6') {
        if (value === 'A') transitate(bind({ stateTo: 'ct', value, message }));
        if (value === 'B') transitate(bind({ stateTo: 'ct', value, message }));
        if (value === 'C') transitate(bind({ stateTo: 'st', value, message }));
      }

      if (currentState === 'q7') {
        if (value === 'A') transitate(bind({ stateTo: 'ct', value, message }));
        if (value === 'B') transitate(bind({ stateTo: 'st', value, message }));
      }

      if (currentState === 'q8') {
        if (value === 'A') transitate(bind({ stateTo: 'ct', value, message }));
        if (value === 'B') transitate(bind({ stateTo: 'ct', value, message }));
        if (value === 'C') transitate(bind({ stateTo: 'ct', value, message }));
      }

      if (currentState === 'q9') {
        if (value === 'A') transitate(bind({ stateTo: 'ct', value, message }));
        if (value === 'B') transitate(bind({ stateTo: 'ct', value, message }));
        if (value === 'C') transitate(bind({ stateTo: 'st', value, message }));
      }
    },
    [selectedValue, currentState, bind],
  );

  const handleReset = useCallback(() => {
    setSelectedValue(0);
    setSelectedCandy('');
    setInputCoinRight(0);
    setInputCoinVisible(1);
    setOutputCoinTop(0);
    setOutputCoinVisible(0);
    setSelectedCandyRotate(0);
    setSelectedCandyRotateX(0);
    setSelectedCandyRotateY(0);
    setSelectedCandyTop(0);
    setSelectedCandyLabel('');
    setHasCashBack(false);

    transitate(bind({ stateTo: 'sI', value: 0 }));

    setCurrentState('sI');
  }, [setCurrentState, bind]);

  const handleSelectInput = useCallback(
    (input: number | string, candyLabel?: string) => {
      if (typeof input === 'string') {
        handleSelectCandy(input);
      }

      if (typeof input === 'number') {
        handleSelectMoney(input);
      }

      if (candyLabel) {
        setSelectedCandyLabel(candyLabel);
      }
    },
    [handleSelectCandy, handleSelectMoney],
  );

  return (
    <CandyMachineContext.Provider
      value={{
        states,
        selectedValue,
        selectedCandy,
        inputCoinRight,
        inputCoinVisible,
        outputCoinTop,
        outputCoinVisible,
        selectedCandyRotate,
        selectedCandyRotateX,
        selectedCandyRotateY,
        selectedCandyTop,
        selectedCandyLabel,
        isBlockedMoney,
        handleStart,
        handleSelectInput,
        handleReset,
      }}
    >
      {children}
    </CandyMachineContext.Provider>
  );
};

function useCandyMachine(): CandyMachineContextData {
  const context = useContext(CandyMachineContext);

  return context;
}

export { CandyMachineProvider, useCandyMachine };
