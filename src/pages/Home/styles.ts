import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 64px;
`;

export const PageHeader = styled.div`
  display: flex;
  justify-content: center;

  margin-bottom: 64px;
`;

export const Machines = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
`;

export const Buttons = styled.div`
  padding: 64px 0;

  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    background: #7159c1;

    padding: 8px 32px;

    border-radius: 16px;

    color: #fbfbfb;
  }
`;
