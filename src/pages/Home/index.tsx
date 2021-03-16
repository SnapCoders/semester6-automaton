import React from 'react';

import { Automaton } from '../../components/molecules';
import { CandyMachine } from '../../components/organisms';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <h1>Simulador de Autômato Finito Determinístico</h1>

      <Content>
        <CandyMachine />

        <Automaton />
      </Content>
    </Container>
  );
};

export default Home;
