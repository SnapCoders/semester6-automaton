import React from 'react';
import { FiArrowLeft } from 'react-icons/fi';

import { Automaton } from '../../components/molecules';
import { CandyMachine } from '../../components/organisms';

import { useCandyMachine } from '../../hooks/useCandyMachine';

import { Container, Content, BackToHome } from './styles';

const CandyMachinePage: React.FC = () => {
  const { states } = useCandyMachine();

  return (
    <Container>
      <Content>
        <div>
          <BackToHome to="/semester6-automaton">
            <FiArrowLeft size={24} />
            Voltar
          </BackToHome>

          <h1>AFD de Máquina de doce</h1>

          <CandyMachine />
        </div>

        <Automaton states={states} />
      </Content>
    </Container>
  );
};

export default CandyMachinePage;
