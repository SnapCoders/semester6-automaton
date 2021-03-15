import React from 'react';

import { Automaton } from '../../components/molecules';

import { Container } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Simulador de Autômato Finito</h1>

      <Automaton />
    </Container>
  );
};

export default Home;
