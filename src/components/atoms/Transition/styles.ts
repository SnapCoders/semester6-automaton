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
  active: css`
    border: solid 2px green;
    border-color: green transparent transparent transparent;

    span {
      color: #fbfbfb;

      filter: brightness(140%);
    }

    &::after {
      border-left-color: green;
    }
  `,
  inactive: css`
    opacity: 0.2;

    span {
      color: yellow;
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

export const Container = styled.div<ContainerProps>`
  position: absolute;

  span {
    position: absolute;
    top: -36px;
  }

  ${({ transitionAs, width, position, rotate }) =>
    transitionAs && transitionAs !== 'straight'
      ? transition[transitionAs]
      : css`
          width: ${width}px !important;
          height: 60px;

          border: solid 2px #fbfbfb;
          border-color: #fbfbfb transparent transparent transparent;

          position: absolute;

          transition: all 0.2s;

          ${() =>
            position &&
            position.top &&
            css`
              top: ${position.top}px;
            `}
          ${() =>
            position &&
            position.bottom &&
            css`
              bottom: ${position.bottom}px;
            `}
          ${() =>
            position &&
            position.left &&
            css`
              left: ${position.left}px;
            `}
          ${() =>
            position &&
            position.right &&
            css`
              right: ${position.right}px;
            `}

          transform: rotate(${rotate}deg);

          &::after {
            content: '';

            width: 0;
            height: 0;

            border-top: 5px solid transparent;
            border-bottom: 5px solid transparent;
            border-left: 10px solid #fbfbfb;

            position: absolute;
            top: -6px;
            right: -8px;
          }

          span {
            position: absolute;
            top: 4px;
            left: 90px;

            font-size: 24px;
            font-weight: bold;

            transition: all 0.2s;

            transform: rotate(-136deg);
          }
        `}
  ${({ isActive }) =>
    isActive ? isActiveTransition.active : isActiveTransition.inactive}
`;
