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
  const {
    selectedValue,
    selectedCandy,
    selectedCandyRotate,
    selectedCandyRotateX,
    selectedCandyRotateY,
    selectedCandyTop,
    selectedCandyLabel,
    handleStart,
    handleSelectInput,
    handleReset,
    inputCoinRight,
    inputCoinVisible,
    outputCoinTop,
    outputCoinVisible,
  } = useAutomaton();

  return (
    <Container>
      <Coin rightPosition={inputCoinRight} visible={inputCoinVisible} />

      <ShowcaseGlass>
        <Thunder1 />
        <Thunder2 />
        <Thunder3 />
      </ShowcaseGlass>

      <Showcase>
        <Candy
          type="top1left1colorA"
          top={selectedCandyLabel === 'top1left1colorA' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top1left1colorA' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top1left1colorA' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top1left1colorA' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('A', 'top1left1colorA')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <Candy
          type="top1left2colorA"
          top={selectedCandyLabel === 'top1left2colorA' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top1left2colorA' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top1left2colorA' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top1left2colorA' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('A', 'top1left2colorA')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <Candy
          type="top1left3colorA"
          top={selectedCandyLabel === 'top1left3colorA' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top1left3colorA' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top1left3colorA' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top1left3colorA' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('A', 'top1left3colorA')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <hr />

        <Candy
          type="top2left1colorA"
          top={selectedCandyLabel === 'top2left1colorA' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top2left1colorA' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top2left1colorA' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top2left1colorA' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('A', 'top2left1colorA')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <Candy
          type="top2left2colorA"
          top={selectedCandyLabel === 'top2left2colorA' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top2left2colorA' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top2left2colorA' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top2left2colorA' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('A', 'top2left2colorA')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <Candy
          type="top2left3colorA"
          top={selectedCandyLabel === 'top2left3colorA' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top2left3colorA' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top2left3colorA' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top2left3colorA' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('A', 'top2left3colorA')}
          isActive={selectedValue < 6}
        >
          A<small>R$ 6</small>
        </Candy>

        <hr />

        <Candy
          type="top3left1colorB"
          top={selectedCandyLabel === 'top3left1colorB' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top3left1colorB' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top3left1colorB' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top3left1colorB' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('B', 'top3left1colorB')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <Candy
          type="top3left2colorB"
          top={selectedCandyLabel === 'top3left2colorB' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top3left2colorB' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top3left2colorB' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top3left2colorB' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('B', 'top3left2colorB')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <Candy
          type="top3left3colorB"
          top={selectedCandyLabel === 'top3left3colorB' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top3left3colorB' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top3left3colorB' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top3left3colorB' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('B', 'top3left3colorB')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <hr />

        <Candy
          type="top4left1colorB"
          top={selectedCandyLabel === 'top4left1colorB' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top4left1colorB' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top4left1colorB' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top4left1colorB' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('B', 'top4left1colorB')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <Candy
          type="top4left2colorB"
          top={selectedCandyLabel === 'top4left2colorB' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top4left2colorB' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top4left2colorB' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top4left2colorB' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('B', 'top4left2colorB')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <Candy
          type="top4left3colorB"
          top={selectedCandyLabel === 'top4left3colorB' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top4left3colorB' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top4left3colorB' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top4left3colorB' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('B', 'top4left3colorB')}
          isActive={selectedValue < 7}
        >
          B<small>R$ 7</small>
        </Candy>

        <hr />

        <Candy
          type="top5left1colorC"
          top={selectedCandyLabel === 'top5left1colorC' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top5left1colorC' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top5left1colorC' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top5left1colorC' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('C', 'top5left1colorC')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <Candy
          type="top5left2colorC"
          top={selectedCandyLabel === 'top5left2colorC' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top5left2colorC' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top5left2colorC' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top5left2colorC' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('C', 'top5left2colorC')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <Candy
          type="top5left3colorC"
          top={selectedCandyLabel === 'top5left3colorC' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top5left3colorC' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top5left3colorC' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top5left3colorC' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('C', 'top5left3colorC')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <hr />

        <Candy
          type="top6left1colorC"
          top={selectedCandyLabel === 'top6left1colorC' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top6left1colorC' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top6left1colorC' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top6left1colorC' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('C', 'top6left1colorC')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <Candy
          type="top6left2colorC"
          top={selectedCandyLabel === 'top6left2colorC' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top6left2colorC' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top6left2colorC' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top6left2colorC' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('C', 'top6left2colorC')}
          isActive={selectedValue < 8}
        >
          C<small>R$ 8</small>
        </Candy>

        <Candy
          type="top6left3colorC"
          top={selectedCandyLabel === 'top6left3colorC' && selectedCandyTop}
          rotateX={
            selectedCandyLabel === 'top6left3colorC' && selectedCandyRotateX
          }
          rotateY={
            selectedCandyLabel === 'top6left3colorC' && selectedCandyRotateY
          }
          rotate={
            selectedCandyLabel === 'top6left3colorC' && selectedCandyRotate
          }
          onClick={() => handleSelectInput('C', 'top6left3colorC')}
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
          onClick={handleStart}
          disabled={selectedCandy === '' || selectedValue === 0}
          style={{ fontSize: 14, wordBreak: 'break-word', maxWidth: 64 }}
        >
          Pegar Doce
        </button>

        <strong>
          <Coin
            topPosition={outputCoinTop}
            rightPosition={18}
            visible={outputCoinVisible}
          />
        </strong>

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
