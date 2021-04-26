import React, { useMemo } from 'react';

import person1Img from '../../../assets/person_1.png';
import person2Img from '../../../assets/person_2.png';
import person3Img from '../../../assets/person_3.png';
import person4Img from '../../../assets/person_4.png';

import {
  Container,
  ViewOnlyBuilding,
  Floors,
  FloorItem,
  Elevator,
  Doors,
  Aside,
  Footer,
} from './styles';

import { useElevator } from '../../../hooks/useElevatorMachine';

interface ElevatorMachineProps {
  viewOnly?: boolean;
}

const ElevatorMachine: React.FC<ElevatorMachineProps> = ({ viewOnly }) => {
  const {
    handleSelectFloor,
    handleSelectPerson,
    floor,
    isElevatorDoorOpen,
    persons,
  } = useElevator();

  const personImages = useMemo(
    () => ({
      person1: person1Img,
      person2: person2Img,
      person3: person3Img,
      person4: person4Img,
    }),
    [],
  );

  const top = useMemo(() => {
    switch (floor) {
      case '3':
        return 15;
      case '2':
        return 158;
      case '1':
        return 300;
      default:
        return 438;
    }
  }, [floor]);

  return (
    <Container>
      {viewOnly && <ViewOnlyBuilding to="/elevator-machine" />}

      <Floors>
        {persons.map(person => (
          <FloorItem
            key={person.name}
            person={person}
            onClick={() => handleSelectPerson(person)}
          >
            <img src={personImages[person.name]} alt={person.name} />
          </FloorItem>
        ))}

        <hr />
        <hr />
        <hr />
      </Floors>

      <Aside>
        <div className="menu">
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
        </div>

        <Elevator floor={floor}>
          <strong style={{ top }}>
            <Doors
              beforeWidth={isElevatorDoorOpen ? 0 : 28}
              afterWidth={isElevatorDoorOpen ? 0 : 27}
            />
          </strong>
        </Elevator>
      </Aside>

      <Footer />
    </Container>
  );
};

export default ElevatorMachine;
