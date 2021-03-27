import React from 'react';

import { Container } from './styles';

interface TransitionProps {
  label: string;
  isActive?: boolean;
  transitionAs?:
    | 'loop'
    | 'leftToRight'
    | 'rightToLeft'
    | 'upToDown'
    | 'downToUp'
    | 'straight';
  width?: number;
  positions?: {
    line: {
      top?: number;
      left?: number;
    };
    label: {
      top?: number;
      left?: number;
    };
  };
  rotations?: {
    line: number;
    label: number;
  };
}

const Transition: React.FC<TransitionProps> = ({
  label,
  isActive,
  transitionAs,
  width,
  positions,
  rotations,
}) => {
  return (
    <Container
      isActive={isActive ? 1 : 0}
      transitionAs={transitionAs}
      width={width}
      positions={positions}
      rotations={rotations}
    >
      <span>{label}</span>
    </Container>
  );
};

export default Transition;
