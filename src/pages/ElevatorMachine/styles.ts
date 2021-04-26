import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 64px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
`;

export const Content = styled.div`
  width: 100%;

  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  div h1 {
    width: 390px;
    margin-bottom: 40px;
  }
`;

export const BackToHome = styled(Link)`
  color: #fbfbfb;
  border-radius: 8px;

  display: flex;
  align-items: center;

  margin-bottom: 8px;

  transition: all 0.2s;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    margin-right: 8px;
  }
`;
