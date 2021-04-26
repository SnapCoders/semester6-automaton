import React from 'react';

import { Container } from './styles';

interface GridProps {
  columns?: number;
}

const Grid: React.FC<GridProps> = ({ children, columns }) => {
  return <Container columns={columns}>{children}</Container>;
};

export default Grid;
