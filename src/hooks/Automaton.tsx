import React, { createContext, useCallback, useContext, useState } from 'react';

import { updateStates } from '../utils/updateStates';

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
                  }, 1000);
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    },
    [handleUpdateState],
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
