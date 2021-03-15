import styled, { css } from 'styled-components';

const transition = {
  loop: css`
    width: 30px;
    height: 40px;

    border: solid 2px #fbfbfb;
    border-color: #fbfbfb transparent transparent transparent;
    border-radius: 120%/100px 100px 0 0;

    position: absolute;
    top: -38px;

    transform: rotate(-5deg);

    &::after {
      content: '';

      width: 0;
      height: 0;

      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 10px solid #fbfbfb;

      position: absolute;
      top: 30px;
      right: -5px;

      transform: rotate(98deg);
    }

    span {
      transform: rotate(5deg);
    }
  `,
  leftToRight: css`
    width: 180px;
    height: 60px;

    border: solid 2px #fbfbfb;
    border-color: #fbfbfb transparent transparent transparent;
    border-radius: 200%/100px 100px 0 0;

    position: relative;

    &::after {
      content: '';

      width: 0;
      height: 0;

      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 10px solid #fbfbfb;

      position: absolute;
      top: 5px;
      right: 10px;

      transform: rotate(24deg);
    }

    span {
      position: absolute;
      left: 75px;

      font-size: 24px;
      font-weight: bold;
    }
  `,
  rightToLeft: css`
    width: 180px;
    height: 60px;

    border: solid 2px #fbfbfb;
    border-color: #fbfbfb transparent transparent transparent;
    border-radius: 200%/100px 100px 0 0;

    position: absolute;
    left: 60px;

    transform: rotate(180deg);

    &::after {
      content: '';

      width: 0;
      height: 0;

      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 10px solid #fbfbfb;

      position: absolute;
      top: 5px;
      right: 10px;

      transform: rotate(24deg);
    }

    span {
      position: absolute;
      right: 75px;

      transform: rotate(-181deg);
    }
  `,
};

const isActiveTransition = {
  css: css`
    border: solid 5px green;
    border-color: green transparent transparent transparent;

    &::after {
      border-left-color: green;
    }
  `,
};

interface ContainerProps {
  isActive?: 0 | 1;
  transitionAs?: 'loop' | 'leftToRight' | 'rightToLeft';
}

export const Container = styled.div<ContainerProps>`
  position: absolute;

  span {
    position: absolute;
    top: -36px;
  }

  ${({ transitionAs }) => transitionAs && transition[transitionAs]}
  ${({ isActive }) => isActive && isActiveTransition.css}
`;
