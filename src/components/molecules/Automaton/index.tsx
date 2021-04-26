import React from 'react';
import { v4 } from 'uuid';

import { State, Transition } from '../../atoms';
import { Grid } from '../../quarks';

import { Container } from './styles';

import { IState } from '../../../@types/automaton';

interface AutomatonProps {
  states: IState[];
  columns?: number;
}

const Automaton: React.FC<AutomatonProps> = ({ states, columns }) => {
  return (
    <Container>
      <Grid columns={columns}>
        {states.map(state => (
          <State
            key={v4()}
            label={state.label}
            isActive={state.isActive}
            isInitial={state.isInitial}
            isFinal={state.isFinal}
            isHidden={state.isHidden}
          >
            {state.transitions?.map(transition => (
              <Transition
                key={v4()}
                label={transition.label}
                isActive={transition.isActive}
                transitionAs={transition.transitionAs}
                width={transition.width}
                positions={transition.positions}
                rotations={transition.rotations}
              />
            ))}
          </State>
        ))}
      </Grid>
    </Container>
  );
};

export default Automaton;
