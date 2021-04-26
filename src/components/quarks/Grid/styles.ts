import styled from 'styled-components';

interface ContainerProps {
  columns?: number;
}

export const Container = styled.div<ContainerProps>`
  display: grid;
  grid-template-columns: repeat(${props => props.columns || 4}, 1fr);
  gap: 180px;
`;
