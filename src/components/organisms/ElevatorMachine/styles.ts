import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { IPerson } from '../../../hooks/useElevatorMachine';

export const ViewOnlyBuilding = styled(Link)`
  position: absolute;

  background: #fbfbfb;

  border-radius: 16px;

  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  opacity: 0;

  cursor: pointer;

  z-index: 10;

  transition: all 0.8s;

  &:hover {
    opacity: 0.2;
  }
`;

export const Container = styled.div`
  width: 360px;
  height: 600px;

  background: #fbfbfb;
  border: 1px solid #222222;
  border-radius: 16px;
  box-shadow: inset 0 0 8em transparent, 0 0 0.8em #222222;

  position: relative;
`;

export const Floors = styled.main`
  width: calc(100% - 80px);
  height: 100%;

  background: #fbfbfb;
  border-top-left-radius: 16px;

  position: absolute;

  hr {
    margin-top: 140px;
  }
`;

interface FloorItemProps {
  person?: IPerson;
}

const personFloor = {
  T: css`
    top: 486px;
  `,
  '1': css`
    top: 344px;
  `,
  '2': css`
    top: 200px;
  `,
  '3': css`
    top: 60px;
  `,
  '4': css``,
};

export const FloorItem = styled.div<FloorItemProps>`
  ${({ person }) => css`
    width: 50px;
    height: 66px;

    position: absolute;

    left: ${person?.leftPosition || 20}px;

    transition: all 0.6s;

    cursor: pointer;

    z-index: 5;

    opacity: 0.7;

    display: flex;
    flex-direction: column;

    img {
      position: absolute;

      ${personFloor[person?.floor || 'T']};

      width: 40px;
      height: 80px;

      opacity: ${person?.isHidden ? 0 : 0.7};
      visibility: ${person?.isHidden ? 'hidden' : 'visible'};

      object-fit: contain;
    }
  `}
`;

const floorElevator = {
  T: css`
    &::before {
      content: 'T';

      width: 100%;
      height: 14px;

      background: #333333;
      border: 2px solid darkgray;

      position: absolute;
      top: -16px;

      text-align: center;
      font-size: 10px;

      transform: scale(1.1);

      z-index: 11;
    }
  `,
  '1': css`
    &::before {
      content: '1';

      width: 100%;
      height: 14px;

      background: #333333;
      border: 2px solid darkgray;

      position: absolute;
      top: -16px;

      text-align: center;
      font-size: 10px;

      transform: scale(1.1);

      z-index: 11;
    }
  `,
  '2': css`
    &::before {
      content: '2';

      width: 100%;
      height: 14px;

      background: #333333;
      border: 2px solid darkgray;

      position: absolute;
      top: -16px;

      text-align: center;
      font-size: 10px;

      transform: scale(1.1);

      z-index: 11;
    }
  `,
  '3': css`
    &::before {
      content: '3';

      width: 100%;
      height: 14px;

      background: #333333;
      border: 2px solid darkgray;

      position: absolute;
      top: -16px;

      text-align: center;
      font-size: 10px;

      transform: scale(1.1);

      z-index: 11;
    }
  `,
  '4': css`
    &::before {
      content: '4';

      width: 100%;
      height: 14px;

      background: #333333;
      border: 2px solid darkgray;

      position: absolute;
      top: -16px;

      text-align: center;
      font-size: 10px;

      transform: scale(1.1);
    }
  `,
};

interface ElevatorProps {
  floor: 'T' | '1' | '2' | '3' | '4';
}

export const Elevator = styled.div<ElevatorProps>`
  ${({ floor = 'T' }) => css`
    flex: 1;

    strong {
      width: 60px;
      height: 100px;

      color: #fbfbfb;

      background: #222222;
      border: 2px solid #eee;

      margin-top: 26px;

      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      transition: all 5s;
      /* transition: all 0.2s; */

      ${floor && floorElevator[floor]}
    }
  `}
`;

interface DoorsProps {
  beforeWidth?: number;
  afterWidth?: number;
}

export const Doors = styled.div<DoorsProps>`
  ${({ beforeWidth, afterWidth }) => css`
    position: relative;

    width: 100%;
    height: 100%;

    z-index: 10;

    transition: width 0.2s;

    &:before {
      content: '';

      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;

      background: #363636;

      width: ${beforeWidth || 0}px;
      height: 100%;
    }

    &:after {
      content: '';

      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;

      background: #363636;

      width: ${afterWidth || 0}px;
      height: 100%;

      border-left: 1px solid #111111;
    }
  `}
`;

export const Aside = styled.aside`
  width: 80px;
  height: 100%;

  background: #454545;
  border-left: 1px solid #222222;
  border-top-right-radius: 16px;

  position: absolute;
  right: 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div.menu {
    display: flex;
    flex-direction: column;

    position: absolute;
    right: -40px;

    button {
      color: white;

      background: gray;
      border: 2px solid darkgray;

      width: 30px;
      height: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      &:hover {
        filter: brightness(0.8);
        transform: scale(1.1);
      }

      & + button {
        margin-top: 8px;
      }

      &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
        filter: brightness(1);
        transform: scale(1);
      }
    }
  }

  > button:nth-of-type(1) {
    color: #fbfbfb;

    font-size: 12px;

    background: darkred;
    border-radius: 6px;

    padding: 4px;
    margin-top: 8px;
    margin-bottom: 50px;

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
`;

export const Footer = styled.footer`
  width: 100%;
  height: 44px;

  background: #232323;

  position: absolute;
  bottom: -10px;

  z-index: 16;
`;
