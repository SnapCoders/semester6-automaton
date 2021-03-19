import { IState, IUpdateState } from '../hooks/Automaton';

export function updateStates(
  previousStates: IState[],
  state: IUpdateState,
): IState[] {
  const updatedStates = previousStates.map(item => {
    const updated = { ...item, isActive: state.isActive };

    const updatedState = item.label === state.label ? updated : item;

    if (state.transition) {
      const updatedTransitions = updatedState.transitions?.map(
        transitionItem => {
          const updatedTransition =
            item.label === state.label &&
            transitionItem.label === state.transition?.label
              ? {
                  ...transitionItem,
                  isActive: state.transition?.isActive,
                }
              : transitionItem;
          return updatedTransition;
        },
      );

      updatedState.transitions = updatedTransitions;
    }

    return updatedState;
  });

  return updatedStates;
}