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
  positions?: {
    line: {
      top?: number;
      left?: number;
    };
    label: {
      top?: number;
      left?: number;
    };
  };
  rotations?: {
    line: number;
    label: number;
  };
}

export const Container = styled.div<ContainerProps>`
  position: absolute;

  span {
    position: absolute;
    top: -36px;
  }

  ${({ transitionAs, width, positions, rotations }) =>
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
            positions &&
            positions.line &&
            positions.line.top &&
            css`
              top: ${positions.line.top}px;
            `}
          ${() =>
            positions &&
            positions.line &&
            positions.line.left &&
            css`
              left: ${positions.line.left}px;
            `}

          transform: rotate(${rotations?.line}deg);

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
            ${() =>
              positions && positions.label && positions.label.top
                ? css`
                    top: ${positions.label.top}px;
                  `
                : ''}
            ${() =>
              positions &&
              positions.label &&
              css`
                left: ${positions.label.left}px;
              `}

            font-size: 24px;
            font-weight: bold;

            transition: all 0.2s;

            transform: rotate(${rotations?.label}deg);
          }
        `}
  ${({ isActive }) =>
    isActive ? isActiveTransition.active : isActiveTransition.inactive}
`;
