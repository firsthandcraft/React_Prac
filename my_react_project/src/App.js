import React from 'react';
import  './css/App.css';
import { useState } from 'react';
import Button from './component/Button';
import Board from './Board';
import logo from './img/logo.png';
function random(n) {
  return Math.ceil(Math.random() * n);
}
function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherGameHistory, setOtherGameHistory] = useState([]);
  const handleRollClick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherGameHistory([...otherGameHistory, nextOtherNum]);
  };

  const handleClearClick = () => {
    setMyHistory([]);
    setOtherGameHistory([]);
  };
  return (
    <div className='App'>
      <div>
        <img className="App-logo" src={logo} alt="주사위게임 로고" />
        <h1 className="App-title">주사위게임</h1>

      </div>
      <Button className='App-button' color="blue" onClick={handleRollClick}>던지기</Button>
      <Button className='App-button'  color="red" onClick={handleClearClick}>처음부터</Button>
      <div>
        <Board className='App-boards' name="나" color="blue" gameHistory={myHistory} />
        <Board className='App-boards' name="상대" color="red" gameHistory={otherGameHistory} />
      </div>
  </div>
  );
}

export default App;
