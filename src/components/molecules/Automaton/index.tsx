import React from 'react';

import { State, Transition } from '../../atoms';
import { Grid } from '../../quarks';

import { Container } from './styles';

const Automaton: React.FC = () => {
  return (
    <Container>
      <Grid>
        <State label="1" isActive isInitial>
          <Transition label="A" transitionAs="loop" />
          <Transition label="B" transitionAs="leftToRight" />
          <Transition label="C" transitionAs="upToDown" />
        </State>

        <State label="2">
          <Transition label="B" transitionAs="leftToRight" />
          <Transition label="A" transitionAs="rightToLeft" />
        </State>

        <State label="3">
          <Transition label="C" transitionAs="rightToLeft" />
        </State>

        <State label="4">
          <Transition label="B" transitionAs="downToUp" />
          <Transition label="A" transitionAs="leftToRight" />
        </State>

        <State label="5">
          <Transition label="B" transitionAs="rightToLeft" />
          <Transition label="C" transitionAs="leftToRight" />
        </State>

        <State label="6">
          <Transition label="B" transitionAs="rightToLeft" />
        </State>
      </Grid>
    </Container>
  );
};

export default Automaton;
