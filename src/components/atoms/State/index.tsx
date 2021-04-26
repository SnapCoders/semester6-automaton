import React from 'react';

import { Container } from './styles';

interface StateProps {
  label: string;
  isActive?: boolean;
  isInitial?: boolean;
  isFinal?: boolean;
  isHidden?: boolean;
}

const State: React.FC<StateProps> = ({
  label,
  isActive,
  isInitial,
  isFinal,
  isHidden,
  children,
}) => {
  return (
    <Container
      id={label}
      isActive={isActive ? 1 : 0}
      isInitial={isInitial ? 1 : 0}
      isFinal={isFinal ? 1 : 0}
      isHidden={isHidden ? 1 : 0}
    >
      {label}
      {children}
    </Container>
  );
};

export default State;
