/* eslint-disable no-unused-vars */
import React, { createContext, useCallback, useContext, useState } from 'react';

interface ITransition {
  label: string;
  isActive?: boolean;
  transitionAs?:
    | 'loop'
    | 'leftToRight'
    | 'rightToLeft'
    | 'upToDown'
    | 'downToUp';
}

interface IState {
  label: string;
  isActive?: boolean;
  isInitial?: boolean;
  isFinal?: boolean;
  transitions?: ITransition[];
}

interface AutomatonContextData {
  states: IState[];
  handleStart: (selectedValue: number, selectedCandy: string) => void;
}

const AutomatonContext = createContext<AutomatonContextData>(
  {} as AutomatonContextData,
);

const AutomatonProvider: React.FC = ({ children }) => {
  const [states, setStates] = useState<IState[]>([
    {
      label: '1',
      isActive: true,
      isInitial: true,
      isFinal: false,
      transitions: [
        { label: 'A', isActive: false, transitionAs: 'loop' },
        { label: 'B', isActive: false, transitionAs: 'leftToRight' },
        { label: 'C', isActive: false, transitionAs: 'upToDown' },
      ],
    },
    {
      label: '2',
      isActive: false,
      isInitial: false,
      isFinal: false,
      transitions: [
        { label: 'B', isActive: false, transitionAs: 'leftToRight' },
        { label: 'A', isActive: false, transitionAs: 'rightToLeft' },
      ],
    },
    {
      label: '3',
      isActive: false,
      isInitial: false,
      isFinal: true,
      transitions: [
        { label: 'C', isActive: false, transitionAs: 'rightToLeft' },
      ],
    },
    {
      label: '4',
      isActive: false,
      isInitial: false,
      isFinal: false,
      transitions: [
        { label: 'B', isActive: false, transitionAs: 'downToUp' },
        { label: 'A', isActive: false, transitionAs: 'leftToRight' },
      ],
    },
    {
      label: '5',
      isActive: false,
      isInitial: false,
      isFinal: false,
      transitions: [
        { label: 'B', isActive: false, transitionAs: 'rightToLeft' },
        { label: 'C', isActive: false, transitionAs: 'leftToRight' },
      ],
    },
    {
      label: '6',
      isActive: false,
      isInitial: false,
      isFinal: true,
      transitions: [
        { label: 'B', isActive: false, transitionAs: 'rightToLeft' },
      ],
    },
  ]);

  const [isStarted, setIsStart] = useState<boolean>(false);
  const [state, setState] = useState<string>('');

  const handleStart = useCallback(
    (selectedValue: number, selectedCandy: string) => {
      setIsStart(true);

      if (!selectedValue) {
        console.log('Ops, selecione um valor para iniciar!');
        return;
      }

      if (!selectedCandy) {
        console.log('Ops, selecione um doce para iniciar!');
        return;
      }

      while (true) {
        console.log('Imprimindo');
      }

      // console.log(
      //   'SelectedCandy: ',
      //   selectedCandy,
      //   'SelectedValue: ',
      //   selectedValue,
      // );
    },
    [],
  );

  return (
    <AutomatonContext.Provider value={{ states, handleStart }}>
      {children}
    </AutomatonContext.Provider>
  );
};

function useAutomaton(): AutomatonContextData {
  const context = useContext(AutomatonContext);

  return context;
}

export { AutomatonProvider, useAutomaton };
