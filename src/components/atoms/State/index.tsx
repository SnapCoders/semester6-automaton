import React from 'react';

import { Container } from './styles';

interface StateProps {
  label: string;
  isActive?: boolean;
  isInitial?: boolean;
  isFinal?: boolean;
}

const State: React.FC<StateProps> = ({
  label,
  isActive,
  isInitial,
  isFinal,
  children,
}) => {
  return (
    <Container
      isActive={isActive ? 1 : 0}
      isInitial={isInitial ? 1 : 0}
      isFinal={isFinal ? 1 : 0}
    >
      {label}
      {children}
    </Container>
  );
};

export default State;
