import React, { createContext, useCallback, useContext, useState } from 'react';

import { updateStates } from '../utils/updateStates';

import { states as exampleStates } from '../constants/exampleStates';
import { products as exampleProducts } from '../constants/products';

import { useToast } from './Toast';

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

interface IProduct {
  label: string;
  price: number;
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

interface AutomatonProviderProps {
  transitionTimer: number;
}

const AutomatonProvider: React.FC<AutomatonProviderProps> = ({
  transitionTimer,
  children,
}) => {
  const { addToast } = useToast();

  const [states, setStates] = useState<IState[]>(exampleStates as IState[]);
  const [products, setProducts] = useState<IProduct[]>(
    exampleProducts as IProduct[],
  );
  const [finalState, setFinalState] = useState<IState | undefined>(undefined);

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

                    const final = states.find(item => item.label === '1');

                    setFinalState(final);

                    if (!final?.isFinal) {
                      const selectedCandy = products.find(
                        item => item.label === candy,
                      );

                      if (selectedCandy) {
                        const { price } = selectedCandy;

                        console.log(
                          `Valor do doce: ${price}`,
                          `Valor informado: ${value}`,
                        );

                        const rest =
                          price > value ? price - value : value - price;

                        if (price > value) {
                          addToast({
                            title: 'Oops, operação inválida!',
                            description: `Faltam ${rest} reais para comprar o doce ${candy}`,
                            type: 'error',
                          });

                          return;
                        }

                        if (value > price) {
                          addToast({
                            title: 'Tudo certo!',
                            description: `Seu troco é ${rest} reais.`,
                            type: 'success',
                          });

                          return;
                        }

                        if (value === price) {
                          addToast({
                            title: 'Tudo certo!',
                            description: `Você não tem troco.`,
                            type: 'success',
                          });

                          return;
                        }
                      }
                    }

                    console.log('Estado final: ', final);
                  }, transitionTimer);
                }, transitionTimer);
              }, transitionTimer);
            }, transitionTimer);
          }, transitionTimer);
        }, transitionTimer);
      }, transitionTimer);
    },
    [states, products, addToast, handleUpdateState, transitionTimer],
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
