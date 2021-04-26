import React from 'react';

import { CandyMachine, ElevatorMachine } from '../../components/organisms';

import { Container, PageHeader, Machines } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <PageHeader>
        <h1>Clique em um autômato para começar a simulação</h1>
      </PageHeader>

      <Machines>
        <CandyMachine viewOnly />

        <ElevatorMachine viewOnly />
      </Machines>
    </Container>
  );
};

export default Home;
