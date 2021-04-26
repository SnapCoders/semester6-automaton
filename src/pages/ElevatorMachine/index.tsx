import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Automaton } from '../../components/molecules';
import { ElevatorMachine } from '../../components/organisms';

import { useElevator } from '../../hooks/useElevatorMachine';

import { Container, Content, BackToHome } from './styles';

const ElevatorMachinePage: React.FC = () => {
  const { states } = useElevator();

  return (
    <Container>
      <Content>
        <div>
          <BackToHome to="/semester6-automaton">
            <FiArrowLeft size={24} />
            Voltar
          </BackToHome>

          <h1>AFD de Elevador</h1>

          <ElevatorMachine />
        </div>

        <Automaton states={states} columns={3} />
      </Content>
    </Container>
  );
};

export default ElevatorMachinePage;
