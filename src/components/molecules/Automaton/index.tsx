import React from 'react';

import { State, Transition } from '../../atoms';

import { Container } from './styles';

const Automaton: React.FC = () => {
  return (
    <Container>
      <State label="s" isActive isInitial>
        <Transition label="a" transitionAs="loop" />
        <Transition label="b" transitionAs="rightToLeft" />
      </State>

      <Transition label="a" transitionAs="leftToRight" />

      <State label="x">
        <Transition label="a" transitionAs="rightToLeft" />
      </State>

      <Transition label="a" transitionAs="leftToRight" />

      <State label="t" isFinal />
    </Container>
  );
};

export default Automaton;
