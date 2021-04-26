export interface IInputState {
  stateFrom: string;
  stateTo: string;
  value: string | number;
  message?: { change: number; candy: string };
}

export type IShowToast = Omit<IInputState, 'stateFrom' | 'value'>;

export interface IUpdateState {
  label: string;
  isActive: boolean;
  transition?: { label: string; isActive: boolean };
}

export interface ITransition {
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
    line: { top?: number; left?: number };
    label: { top?: number; left?: number };
  };
  rotations?: { line: number; label: number };
}

export interface IState {
  label: string;
  isActive?: boolean;
  isInitial?: boolean;
  isFinal?: boolean;
  isHidden?: boolean;
  transitions?: ITransition[];
}

// Adicionar possibilidade do cálculo das flechas serem automáticas
// Por questões de responsividade

// const initialState = document.getElementById('sI');
// const state1A = document.getElementById('q5');
// state1A.getBoundingClientRect();
// width por padrão: (((q5.x) - (sI.x)) - 40)
