import React, { useState } from 'react';
import HandButton from './component/HandButton';
import Button from './component/Button';
import HandIcon from './component/HandIcon';
import Dice from './component/Dice';
import { compareHand, generateRandomHand } from './js/utils';

const INITIAL_VALUE = 'rock';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function Ninth() {
  const [hand, setHand] = useState(INITIAL_VALUE);
  const [otherHand, setOtherHand] = useState(INITIAL_VALUE);
  const [gameHistory, setGameHistory] = useState([]);
  const [score, setScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [bet, setBet] = useState(1);

  const handleButtonClick = (nextHand) => {
    const nextOtherHand = generateRandomHand();
    const nextHistoryItem = getResult(nextHand, nextOtherHand);
    const comparison = compareHand(nextHand, nextOtherHand);
    setHand(nextHand);
    setOtherHand(nextOtherHand);
    // gameHistory에 nextHistoryItem 을 추가해 주세요
    setGameHistory([...gameHistory,nextHistoryItem]);
    if (comparison > 0) setScore(score + bet);
    if (comparison < 0) setOtherScore(otherScore + bet);
  };

  const handleClearClick = () => {
    setHand(INITIAL_VALUE);
    setOtherHand(INITIAL_VALUE);
    // gameHistory를 비워주세요
    setGameHistory([]);
    setScore(0);
    setOtherScore(0);
    setBet(1);
  };
  const handleBetChange = (e) => {
    const num = Number(e.target.value);
    setBet(num);
  };

  return (
    <div className="Ninth bundle">
    <h3 id="title" className="contentTitle">9.승부기록만들기</h3>
   
      <Button onClick={handleClearClick}>처음부터</Button>
      <div>
        {score} : {otherScore}
      </div>
      <div>
        <HandIcon value={hand} />
        VS
        <HandIcon value={otherHand} />
      </div>
      <div>
        <input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input>
      </div>
      <p>승부 기록: {gameHistory.join(', ')}</p>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default Ninth;

