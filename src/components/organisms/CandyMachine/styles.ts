import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 360px;
  height: 600px;

  background: #fbfbfb;
  border: 1px solid #222222;
  border-radius: 16px;
  box-shadow: inset 0 0 8em transparent, 0 0 0.8em #222222;

  position: relative;
`;

interface CoinProps {
  visible: number;
  topPosition?: number;
  rightPosition?: number;
}

export const Coin = styled.div<CoinProps>`
  width: 18px;
  height: 18px;

  background: #ffd700;
  border-radius: 50%;
  box-shadow: inset 0 0 1em transparent, 0 0 0.4em #222222;

  position: absolute;
  top: ${({ topPosition }) => (topPosition ? `${topPosition}px` : '57px')};
  right: ${({ rightPosition }) =>
    rightPosition ? `${rightPosition}px` : '-16px'};

  opacity: ${({ visible }) => (visible ? 1 : 0)};
  visibility: ${({ visible }) => (visible ? 1 : 0)};

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.8s;

  cursor: pointer;

  z-index: 4;

  &::after {
    content: '';

    width: 12px;
    height: 12px;

    background: #d4af37;
    border-radius: 50%;

    filter: brightness(180%);
  }
`;

export const Showcase = styled.main`
  width: calc(100% - 80px);
  height: 100%;

  background: #fbfbfb;
  border-top-left-radius: 16px;

  position: absolute;

  hr {
    margin-top: 80px;
  }
`;

export const Cage = styled.div`
  width: 278px;
  height: 66px;

  background: #000000;

  margin: 0 auto;

  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';

    width: 260px;
    height: 50px;

    background: #232323;

    position: absolute;
  }

  strong {
    margin-top: -48px;

    z-index: 6;
  }
`;

const candyType = {
  top1left1colorA: css`
    background: red;
    top: 14px;
    left: 20px;
  `,
  top1left2colorA: css`
    background: red;
    top: 14px;
    left: 110px;
  `,
  top1left3colorA: css`
    background: red;
    top: 14px;
    left: 200px;
  `,
  top2left1colorA: css`
    background: red;
    top: 96px;
    left: 20px;
  `,
  top2left2colorA: css`
    background: red;
    top: 96px;
    left: 110px;
  `,
  top2left3colorA: css`
    background: red;
    top: 96px;
    left: 200px;
  `,
  top3left1colorB: css`
    background: green;
    top: 178px;
    left: 20px;
  `,
  top3left2colorB: css`
    background: green;
    top: 178px;
    left: 110px;
  `,
  top3left3colorB: css`
    background: green;
    top: 178px;
    left: 200px;
  `,
  top4left1colorB: css`
    background: green;
    top: 260px;
    left: 20px;
  `,
  top4left2colorB: css`
    background: green;
    top: 260px;
    left: 110px;
  `,
  top4left3colorB: css`
    background: green;
    top: 260px;
    left: 200px;
  `,
  top5left1colorC: css`
    background: blue;
    top: 342px;
    left: 20px;
  `,
  top5left2colorC: css`
    background: blue;
    top: 342px;
    left: 110px;
  `,
  top5left3colorC: css`
    background: blue;
    top: 342px;
    left: 200px;
  `,
  top6left1colorC: css`
    background: blue;
    top: 424px;
    left: 20px;
  `,
  top6left2colorC: css`
    background: blue;
    top: 424px;
    left: 110px;
  `,
  top6left3colorC: css`
    background: blue;
    top: 424px;
    left: 200px;
  `,
};

const candyActive = {
  inactive: css`
    filter: brightness(0.5);
    cursor: not-allowed;
  `,
};

interface CandyProps {
  isActive?: boolean;
  top?: number | boolean | undefined;
  rotate?: number | boolean | undefined;
  rotateX?: number | boolean | undefined;
  rotateY?: number | boolean | undefined;
  type?:
    | 'top1left1colorA'
    | 'top1left2colorA'
    | 'top1left3colorA'
    | 'top2left1colorA'
    | 'top2left2colorA'
    | 'top2left3colorA'
    | 'top3left1colorB'
    | 'top3left2colorB'
    | 'top3left3colorB'
    | 'top4left1colorB'
    | 'top4left2colorB'
    | 'top4left3colorB'
    | 'top5left1colorC'
    | 'top5left2colorC'
    | 'top5left3colorC'
    | 'top6left1colorC'
    | 'top6left2colorC'
    | 'top6left3colorC';
}

export const Candy = styled.div<CandyProps>`
  width: 50px;
  height: 66px;

  background: red;
  border-top-left-radius: 8px;
  border-top-right-radius: 4px;
  font-size: 24px;
  font-weight: bold;

  position: absolute;

  display: flex;
  align-items: center;
  justify-content: center;

  transform: ${({ rotate, rotateX, rotateY }) =>
    rotate
      ? `rotateX(${rotateX}deg) rotateY(${rotateY}deg) rotate(${rotate}deg)`
      : 'rotate(0deg)'};

  top: ${({ top }) => top && `${top}px !important`};

  transition: all 0.6s;

  cursor: pointer;

  z-index: 5;

  opacity: 0.7;

  display: flex;
  flex-direction: column;

  small {
    font-size: 14px;
  }

  ${({ type }) => type && candyType[type]}
  ${({ isActive }) => isActive && candyActive.inactive}
`;

export const Thunder1 = styled.div`
  transform: skew(45deg) rotate(45deg);

  background: #e0ffff;
  width: 80px;
  height: 50px;

  position: absolute;
  top: 50px;
  left: 16px;

  z-index: 3;
`;

export const Thunder2 = styled.div`
  transform: skew(45deg) rotate(45deg);

  background: #e0ffff;
  width: 80px;
  height: 50px;

  position: absolute;
  top: 80px;
  right: 16px;

  z-index: 3;
`;

export const Thunder3 = styled.div`
  transform: skew(-45deg) rotate(-45deg);

  background: #e0ffff;
  width: 40px;
  height: 50px;

  position: absolute;
  top: 65px;
  right: 118px;

  z-index: 3;
`;

export const ShowcaseGlass = styled.div`
  width: calc(100% - 80px);
  height: calc(100% - 40px);

  background: #a1c6c8;
  border-top-left-radius: 16px;

  opacity: 0.4;

  position: absolute;

  z-index: 2;
`;

export const Aside = styled.aside`
  width: 80px;
  height: 100%;

  background: darkred;
  border-left: 1px solid #222222;
  border-top-right-radius: 16px;

  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  span {
    width: 20px;
    height: 24px;

    background: #222222;

    position: relative;

    display: flex;
    align-items: center;
    justify-content: center;

    &::after {
      content: '';

      width: 6px;
      height: 18px;

      background: #444444;

      position: absolute;
    }
  }

  > div {
    width: 100%;

    margin: 10px auto;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
      width: 70px;

      margin: 8px 0;
    }

    button:disabled {
      filter: brightness(80%);
    }
  }

  label {
    width: 60px;
    height: 40px;

    color: #fbfbfb;

    background: #222222;
    border: 2px solid #eee;

    margin-bottom: 26px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  > button:nth-of-type(1) {
    color: #fbfbfb;

    font-size: 12px;

    background: #7159c1;
    border-radius: 6px;

    padding: 4px;

    transition: all 0.2s;

    &:not(:disabled):hover {
      filter: brightness(120%);

      box-shadow: inset 0 0 1em transparent, 0 0 0.4em #7159c1;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  > button:nth-of-type(2) {
    color: #fbfbfb;

    font-size: 12px;

    background: darkred;
    border-radius: 6px;

    padding: 4px;
    margin-top: 8px;

    transition: all 0.2s;

    filter: brightness(140%);

    &:not(:disabled):hover {
      filter: brightness(120%);

      box-shadow: inset 0 0 1em transparent, 0 0 0.4em darkred;
    }

    &:disabled {
      cursor: not-allowed;
    }
  }

  strong {
    width: 60px;
    height: 80px;

    color: #fbfbfb;

    background: #222222;
    border: 2px solid #eee;

    margin-top: 26px;

    display: flex;
    align-items: center;
    justify-content: center;

    position: relative;

    &::before {
      content: '';

      width: 20px;
      height: 34px;

      background: #333333;

      position: absolute;
      top: 0;
      left: 13px;

      transform: skew(18deg);
    }

    &::after {
      content: '';

      width: 20px;
      height: 34px;

      background: #333333;

      position: absolute;
      top: 0;
      right: 13px;

      transform: skew(-18deg);
    }
  }
`;

export const Footer = styled.footer`
  width: 100%;
  height: 40px;

  background: #232323;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;

  position: absolute;
  bottom: 0;

  z-index: 16;

  &::before {
    content: '';

    width: 16px;
    height: 26px;

    background: #232323;

    position: absolute;
    bottom: -10px;
  }

  &::after {
    content: '';

    width: 16px;
    height: 26px;

    background: #232323;

    position: absolute;
    bottom: -10px;
    right: 0;
  }
`;
