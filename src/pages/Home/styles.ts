import styled from 'styled-components';

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
