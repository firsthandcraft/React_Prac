import { Fragment } from 'react';
import React, { useState } from 'react';
import Dice from './component/Dice';
import HandIcon from './component/HandIcon';
import HandButton from './component/HandButton';
import Button from './component/Button';

const me = 'rock';
let other = '';
const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function getResult(left, right) {
  console.log("WINS[left]:",WINS[left]);
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  else return '무승부';
}

function Second() {
  const [result, setResult] = useState('');

  const handleClick1 = (s) => {
     other = s;
    console.log(s);
    const outcome = getResult(me, other);
    console.log(outcome)
    setResult(outcome);
  };
  return (
    <div className="Second bundle">
       <Fragment>
        <h3 id="title" className="contentTitle">02. 실습</h3>
        <p>가위바위보</p>
        <h5>result :::  {result}</h5>
        <p>other ::: {other}</p>
        <button onClick={() => handleClick1("scissor")}>가위</button>
        <button onClick={() => handleClick1("rock")}>바위</button>
        <button onClick={() => handleClick1("paper")}>보</button>

     
      </Fragment>
    </div>
  );
}

export default Second;
