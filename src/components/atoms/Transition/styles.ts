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

    position: absolute;
    left: 60px;

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
    right: 60px;

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
  upToDown: css`
    width: 180px;
    height: 60px;

    border: solid 2px #fbfbfb;
    border-color: #fbfbfb transparent transparent transparent;
    border-radius: 200%/100px 100px 0 0;

    position: absolute;
    top: 120px;

    transform: rotate(90deg);

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

      transform: rotate(-90deg);
    }
  `,
  downToUp: css`
    width: 180px;
    height: 60px;

    border: solid 2px #fbfbfb;
    border-color: #fbfbfb transparent transparent transparent;
    border-radius: 200%/100px 100px 0 0;

    position: absolute;
    bottom: 120px;

    transform: rotate(-90deg);

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

      transform: rotate(90deg);
    }
  `,
};

const isActiveTransition = {
  css: css`
    border: solid 2px green;
    border-color: green transparent transparent transparent;

    &::after {
      border-left-color: green;
    }
  `,
};

interface ContainerProps {
  isActive?: 0 | 1;
  transitionAs?:
    | 'loop'
    | 'leftToRight'
    | 'rightToLeft'
    | 'upToDown'
    | 'downToUp';
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
