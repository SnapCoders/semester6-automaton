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
  position?: {
    top?: number;
    bottom?: number;
    left?: number;
    right?: number;
  };
  rotate?: number;
}

const Transition: React.FC<TransitionProps> = ({
  label,
  isActive,
  transitionAs,
  width,
  position,
  rotate,
}) => {
  return (
    <Container
      isActive={isActive ? 1 : 0}
      transitionAs={transitionAs}
      width={width}
      position={position}
      rotate={rotate}
    >
      <span>{label}</span>
    </Container>
  );
};

export default Transition;
