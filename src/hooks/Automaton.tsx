import React, { createContext, useCallback, useContext, useState } from 'react';

import { updateStates } from '../utils/updateStates';

import { exampleStates } from '../constants/exampleStates';

import { useToast } from './Toast';

const transitionTimer = 300;

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

export interface IState {
  label: string;
  isActive?: boolean;
  isInitial?: boolean;
  isFinal?: boolean;
  transitions?: ITransition[];
}

interface AutomatonContextData {
  states: IState[];
  handleStart: (_value: number, _candy: string) => void;
}

const AutomatonContext = createContext<AutomatonContextData>(
  {} as AutomatonContextData,
);

export interface IUpdateState {
  label: string;
  isActive: boolean;
  transition?: { label: string; isActive: boolean };
}

const AutomatonProvider: React.FC = ({ children }) => {
  const { addToast } = useToast();

  const [states, setStates] = useState<IState[]>(exampleStates as IState[]);

  const handleUpdateState = useCallback((state: IUpdateState) => {
    setStates(previousStates => updateStates(previousStates, state));
  }, []);

  const handleStart = useCallback(
    (value: number, candy: string) => {
      if (!value) {
        console.log('Ops, selecione um valor para iniciar!');
        return;
      }

      if (!candy) {
        console.log('Ops, selecione um doce para iniciar!');
        return;
      }

      addToast({ title: 'Autômato iniciado!' });

      handleUpdateState({
        label: '1',
        isActive: false,
        transition: { label: 'B', isActive: true },
      });

      setTimeout(() => {
        handleUpdateState({
          label: '1',
          isActive: false,
          transition: { label: 'B', isActive: false },
        });

        handleUpdateState({ label: '2', isActive: true });

        setTimeout(() => {
          handleUpdateState({
            label: '2',
            isActive: false,
            transition: { label: 'B', isActive: true },
          });

          handleUpdateState({ label: '2', isActive: false });

          setTimeout(() => {
            handleUpdateState({
              label: '2',
              isActive: false,
              transition: { label: 'B', isActive: false },
            });

            handleUpdateState({ label: '3', isActive: true });

            setTimeout(() => {
              handleUpdateState({
                label: '3',
                isActive: false,
                transition: { label: 'C', isActive: true },
              });

              setTimeout(() => {
                handleUpdateState({
                  label: '3',
                  isActive: false,
                  transition: { label: 'C', isActive: false },
                });

                handleUpdateState({ label: '2', isActive: true });

                setTimeout(() => {
                  handleUpdateState({
                    label: '2',
                    isActive: false,
                    transition: { label: 'A', isActive: true },
                  });

                  handleUpdateState({ label: '2', isActive: false });

                  setTimeout(() => {
                    handleUpdateState({
                      label: '2',
                      isActive: false,
                      transition: { label: 'A', isActive: false },
                    });

                    handleUpdateState({ label: '1', isActive: true });
                  }, transitionTimer);
                }, transitionTimer);
              }, transitionTimer);
            }, transitionTimer);
          }, transitionTimer);
        }, transitionTimer);
      }, transitionTimer);
    },
    [addToast, handleUpdateState],
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
