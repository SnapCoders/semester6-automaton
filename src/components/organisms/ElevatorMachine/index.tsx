import React, { useCallback, useMemo, useState } from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

import { Container, ViewOnlyBuilding, Elevator, Aside, Footer } from './styles';

type IFloor = 'T' | '1' | '2' | '3' | '4';

interface ElevatorMachineProps {
  viewOnly?: boolean;
}

const ElevatorMachine: React.FC<ElevatorMachineProps> = ({ viewOnly }) => {
  const [selectedValue] = useState();

  const [floor, setFloor] = useState<IFloor>('T');
  const [, setDirection] = useState<'up' | 'down'>('up');

  const handleReset = useCallback(() => {
    console.log('handleReset');
  }, []);

  const handleSelectFloor = useCallback(
    (inputFloor: IFloor) => setFloor(inputFloor),
    [],
  );

  const handleSelectDirection = useCallback(
    (inputDirection: 'up' | 'down') => setDirection(inputDirection),
    [],
  );

  const top = useMemo(() => {
    switch (floor) {
      case '1':
        return 260;
      case '2':
        return 180;
      case '3':
        return 100;
      case '4':
        return 10;
      default:
        return 340;
    }
  }, [floor]);

  return (
    <Container>
      {viewOnly && <ViewOnlyBuilding to="/elevator-machine" />}

      <Aside>
        <div className="menu">
          <button type="button" onClick={() => handleSelectFloor('4')}>
            4
          </button>

          <button type="button" onClick={() => handleSelectFloor('3')}>
            3
          </button>

          <button type="button" onClick={() => handleSelectFloor('2')}>
            2
          </button>

          <button type="button" onClick={() => handleSelectFloor('1')}>
            1
          </button>

          <button type="button" onClick={() => handleSelectFloor('T')}>
            T
          </button>

          <button type="button" onClick={() => handleSelectDirection('up')}>
            <FiArrowUp size={20} color="#fbfbfb" />
          </button>

          <button type="button" onClick={() => handleSelectDirection('down')}>
            <FiArrowDown size={20} color="#fbfbfb" />
          </button>
        </div>

        <Elevator floor={floor}>
          <strong style={{ top }} />
        </Elevator>

        <button
          type="button"
          onClick={handleReset}
          disabled={selectedValue === 0}
        >
          Resetar
        </button>
      </Aside>

      <Footer />
    </Container>
  );
};

export default ElevatorMachine;
