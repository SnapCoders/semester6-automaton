import React, { useCallback, useState } from 'react';

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
  const [selectedCandy, setSelectedCandy] = useState<string>('');
  const [selectedValue, setSelectedValue] = useState<number>(0);

  const handleSelectMoney = useCallback((value: number) => {
    setSelectedValue(value);
  }, []);

  const handleSelectCandy = useCallback((value: string) => {
    setSelectedCandy(value);
  }, []);

  console.log(
    'SelectedCandy: ',
    selectedCandy,
    'SelectedValue: ',
    selectedValue,
  );

  return (
    <Container>
      <Coin />

      <ShowcaseGlass>
        <Thunder1 />
        <Thunder2 />
        <Thunder3 />
      </ShowcaseGlass>

      <Showcase>
        <Candy type="top1left1colorA" onClick={() => handleSelectCandy('A')}>
          A<small>R$ 6</small>
        </Candy>
        <Candy type="top1left2colorA" onClick={() => handleSelectCandy('A')}>
          A<small>R$ 6</small>
        </Candy>
        <Candy type="top1left3colorA" onClick={() => handleSelectCandy('A')}>
          A<small>R$ 6</small>
        </Candy>
        <hr />
        <Candy type="top2left1colorA" onClick={() => handleSelectCandy('A')}>
          A<small>R$ 6</small>
        </Candy>
        <Candy type="top2left2colorA" onClick={() => handleSelectCandy('A')}>
          A<small>R$ 6</small>
        </Candy>
        <Candy type="top2left3colorA" onClick={() => handleSelectCandy('A')}>
          A<small>R$ 6</small>
        </Candy>
        <hr />
        <Candy type="top3left1colorB" onClick={() => handleSelectCandy('B')}>
          B<small>R$ 7</small>
        </Candy>
        <Candy type="top3left2colorB" onClick={() => handleSelectCandy('B')}>
          B<small>R$ 7</small>
        </Candy>
        <Candy type="top3left3colorB" onClick={() => handleSelectCandy('B')}>
          B<small>R$ 7</small>
        </Candy>
        <hr />
        <Candy type="top4left1colorB" onClick={() => handleSelectCandy('B')}>
          B<small>R$ 7</small>
        </Candy>
        <Candy type="top4left2colorB" onClick={() => handleSelectCandy('B')}>
          B<small>R$ 7</small>
        </Candy>
        <Candy type="top4left3colorB" onClick={() => handleSelectCandy('B')}>
          B<small>R$ 7</small>
        </Candy>
        <hr />
        <Candy type="top5left1colorC" onClick={() => handleSelectCandy('C')}>
          C<small>R$ 8</small>
        </Candy>
        <Candy type="top5left2colorC" onClick={() => handleSelectCandy('C')}>
          C<small>R$ 8</small>
        </Candy>
        <Candy type="top5left3colorC" onClick={() => handleSelectCandy('C')}>
          C<small>R$ 8</small>
        </Candy>
        <hr />
        <Candy type="top6left1colorC" onClick={() => handleSelectCandy('C')}>
          C<small>R$ 8</small>
        </Candy>
        <Candy type="top6left2colorC" onClick={() => handleSelectCandy('C')}>
          C<small>R$ 8</small>
        </Candy>
        <Candy type="top6left3colorC" onClick={() => handleSelectCandy('C')}>
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
          <button type="button" onClick={() => handleSelectMoney(1)}>
            <img src={real1} alt="1 real" />
          </button>

          <button type="button" onClick={() => handleSelectMoney(2)}>
            <img src={real2} alt="2 reais" />
          </button>

          <button type="button" onClick={() => handleSelectMoney(5)}>
            <img src={real5} alt="5 reais" />
          </button>
        </div>

        <label>{selectedValue !== 0 && `R$ ${selectedValue}`}</label>

        <button
          type="button"
          disabled={selectedCandy === '' || selectedValue === 0}
        >
          Comprar
        </button>

        <strong />
      </Aside>

      <Footer />
    </Container>
  );
};

export default CandyMachine;
