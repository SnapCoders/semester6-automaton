import React from 'react';

import { Automaton } from '../../components/molecules';
import { CandyMachine } from '../../components/organisms';

import { Container, Content } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
        <div>
          <h1>Simulador de Autômato Finito Determinístico</h1>
          <CandyMachine />
        </div>

        <Automaton />
      </Content>
    </Container>
  );
};

export default Home;
