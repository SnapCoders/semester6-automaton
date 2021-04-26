import styled, { css } from 'styled-components';

const isInitialState = {
  css: css`
    &::before {
      content: '';

      width: 40px;
      height: 2px;

      background: #fbfbfb;

      position: absolute;
      left: -60px;
    }

    &::after {
      content: '';

      width: 0;
      height: 0;

      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      border-left: 12px solid #fbfbfb;

      position: absolute;
      left: -30px;
    }
  `,
};

const isFinalState = {
  css: css`
    &::before {
    }

    &::before {
      content: '';

      width: 50px;
      height: 50px;

      background: transparent;
      border: 1px solid #fbfbfb;
      border-radius: 50%;

      position: absolute;
    }
  `,
};

interface ContainerProps {
  isActive?: 0 | 1;
  isInitial?: 0 | 1;
  isFinal?: 0 | 1;
  isHidden?: 0 | 1;
}

export const Container = styled.div<ContainerProps>`
  width: 60px;
  height: 60px;

  background: ${({ isActive }) => (isActive ? 'green' : 'gray')};
  border: 1px solid #fbfbfb;
  border-radius: 50%;

  font-size: 24px;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  opacity: ${({ isHidden }) => (isHidden ? '0' : '1')};

  position: relative;

  ${({ isInitial }) => isInitial && isInitialState.css}
  ${({ isFinal }) => isFinal && isFinalState.css}
`;
