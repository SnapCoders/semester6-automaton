import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

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
      width: 50px;
      height: 60px;

      color: #fbfbfb;

      background: #222222;
      border: 2px solid #eee;

      margin-top: 26px;

      display: flex;
      align-items: center;
      justify-content: center;

      position: relative;

      transition: all 0.8s;

      ${floor && floorElevator[floor]}
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
  height: 50px;

  background: #232323;

  position: absolute;
  bottom: -10px;

  z-index: 16;
`;
