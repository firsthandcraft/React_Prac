import React, { useState } from 'react';
import HandButton from './component/HandButton';
import Button from './component/Button';
import Score from './component/Score';
import HandIcon from './component/HandIcon';
import { compareHand, generateRandomHand } from './js/utils';
import './css/App.css'
const INITIAL_VALUE = 'rock';

function getResult(me, other) {
  const comparison = compareHand(me, other);
  if (comparison > 0) return '승리';
  if (comparison < 0) return '패배';
  return '무승부';
}

function App() {
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
    <div className="App bundle">
      <h1 class="App-heading">가위바위보</h1>
      <Button onClick={handleClearClick}>처음부터</Button>
      <div className="App-scores">
        <Score num={score} name="나" />
        <div class="App-versus">:</div>
        <Score num={otherScore} name="상대"/>
      </div>
   
      
      <div className="Box App-box">
        <div className="App-hands">
          <HandIcon value={hand} />
          <div className="App-versus">VS</div>
          <HandIcon value={otherHand} />
        </div>
      </div>
      <div>
      <div className="App-bet">
        <span>배점</span><input type="number" value={bet} min={1} max={9} onChange={handleBetChange}></input><span>배</span>
      </div>
      </div>
      <div className="App-history">
            <h2>승부기록</h2>
            <p>{gameHistory.join(', ')}</p>
          </div>
      <div>
        <HandButton value="rock" onClick={handleButtonClick} />
        <HandButton value="scissor" onClick={handleButtonClick} />
        <HandButton value="paper" onClick={handleButtonClick} />
      </div>
    </div>
  );
}

export default App;

