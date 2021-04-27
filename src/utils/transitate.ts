import { IInputState, IShowToast, IUpdateState } from '../@types/automaton';

export interface ITransitate {
  inputState: IInputState;
  setCurrentState: (_value: React.SetStateAction<any>) => void;
  showMessage: (_input: IShowToast) => void;
  updateState: (_state: IUpdateState) => void;
  transitionTimer?: number;
}

function transitate({
  inputState,
  setCurrentState,
  showMessage,
  updateState,
  transitionTimer = 400,
}: ITransitate) {
  setTimeout(() => {
    const { stateFrom, value, message, stateTo } = inputState;

    updateState({
      label: stateFrom,
      isActive: false,
      transition: { label: String(value), isActive: true },
    });

    setTimeout(() => {
      updateState({
        label: stateFrom,
        isActive: false,
        transition: { label: String(value), isActive: false },
      });

      updateState({ label: stateTo, isActive: true });

      setCurrentState(stateTo);
      showMessage({ message, stateTo });
    }, transitionTimer);
  }, transitionTimer);
}

export default transitate;
