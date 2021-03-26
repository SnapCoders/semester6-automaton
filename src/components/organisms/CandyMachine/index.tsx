import React from 'react';

import { useAutomaton } from '../../../hooks/Automaton';

import real1 from '../../../assets/1_real.png';
import real2 from '../../../assets/2_real.jpg';
import real5 from '../../../assets/5_real.jpg';

import {
  Container,
  Coin,
  Showcase,
  Cage,
  Candy,
  Thunder1,
  Thunder2,
  Thunder3,
  ShowcaseGlass,
  Aside,
  Footer,
} from './styles';

const CandyMachine: React.FC = () => {
  const { handleStart } = useAutomaton();

  const {
    selectedValue,
    selectedCandy,
    handleSelectInput,
    handleReset,
  } = useAutomaton();

  return (
    <Container>
      <Coin />

      <ShowcaseGlass>
        <Thunder1 />
        <Thunder2 />
        <Thunder3 />
      </ShowcaseGlass>

      <Showcase>
        <Candy
          type="top1left1colorA"
          onClick={() => handleSelectInput('A')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <Candy
          type="top1left2colorA"
          onClick={() => handleSelectInput('A')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <Candy
          type="top1left3colorA"
          onClick={() => handleSelectInput('A')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <hr />

        <Candy
          type="top2left1colorA"
          onClick={() => handleSelectInput('A')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <Candy
          type="top2left2colorA"
          onClick={() => handleSelectInput('A')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <Candy
          type="top2left3colorA"
          onClick={() => handleSelectInput('A')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <hr />

        <Candy
          type="top3left1colorB"
          onClick={() => handleSelectInput('B')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <Candy
          type="top3left2colorB"
          onClick={() => handleSelectInput('B')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <Candy
          type="top3left3colorB"
          onClick={() => handleSelectInput('B')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <hr />

        <Candy
          type="top4left1colorB"
          onClick={() => handleSelectInput('B')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <Candy
          type="top4left2colorB"
          onClick={() => handleSelectInput('B')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <Candy
          type="top4left3colorB"
          onClick={() => handleSelectInput('B')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <hr />

        <Candy
          type="top5left1colorC"
          onClick={() => handleSelectInput('C')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <Candy
          type="top5left2colorC"
          onClick={() => handleSelectInput('C')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <Candy
          type="top5left3colorC"
          onClick={() => handleSelectInput('C')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <hr />

        <Candy
          type="top6left1colorC"
          onClick={() => handleSelectInput('C')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <Candy
          type="top6left2colorC"
          onClick={() => handleSelectInput('C')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <Candy
          type="top6left3colorC"
          onClick={() => handleSelectInput('C')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <hr />

        <Cage>
          {selectedCandy && <strong>Doce selecionado: {selectedCandy}</strong>}
        </Cage>
      </Showcase>

      <Aside>
        <span />

        <div>
          <button type="button" onClick={() => handleSelectInput(1)}>
            <img src={real1} alt="1 real" />
          </button>

          <button type="button" onClick={() => handleSelectInput(2)}>
            <img src={real2} alt="2 reais" />
          </button>

          <button type="button" onClick={() => handleSelectInput(5)}>
            <img src={real5} alt="5 reais" />
          </button>
        </div>

        <label>{selectedValue !== 0 && `R$ ${selectedValue}`}</label>

        <button
          type="button"
          onClick={() => handleStart(selectedValue, selectedCandy)}
          disabled={selectedCandy === '' || selectedValue === 0}
        >
          Comprar
        </button>

        <strong />

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

export default CandyMachine;
