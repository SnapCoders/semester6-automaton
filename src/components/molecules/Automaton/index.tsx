import React from 'react';
import { v4 } from 'uuid';

import { State, Transition } from '../../atoms';
import { Grid } from '../../quarks';

import { useAutomaton } from '../../../hooks/Automaton';

import { Container } from './styles';

const Automaton: React.FC = () => {
  const { states } = useAutomaton();

  return (
    <Container>
      <Grid>
        {states.map(state => (
          <State
            key={v4()}
            label={state.label}
            isActive={state.isActive}
            isInitial={state.isInitial}
            isFinal={state.isFinal}
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
