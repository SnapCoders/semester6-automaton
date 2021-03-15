import React from 'react';

import { Container } from './styles';

interface TransitionProps {
  label: string;
  isActive?: boolean;
  transitionAs?: 'loop' | 'leftToRight' | 'rightToLeft';
}

const Transition: React.FC<TransitionProps> = ({
  label,
  isActive,
  transitionAs,
}) => {
  return (
    <Container isActive={isActive ? 1 : 0} transitionAs={transitionAs}>
      <span>{label}</span>
    </Container>
  );
};

export default Transition;
