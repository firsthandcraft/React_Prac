import './App.css';
import { Fragment } from 'react';
import Dice from './Dice';
import HandIcon from './HandIcon';
import HandButton from './HandButton';
import Button from './Button';

const me = 'rock';
let other = '';
function getResult(left, right) {
  if (WINS[left] === right) return '승리';
  else if (left === WINS[right]) return '패배';
  return '무승부';
}

const WINS = {
  rock: 'scissor',
  scissor: 'paper',
  paper: 'rock',
};

function handleClick1(s){
  other = s;
  console.log(s);
}
function App() {
  const handleClick = (value) => console.log(value);
  const handleButtonClick = (value) => console.log(value);
  const handleClearClick = () => console.log('처음부터');
  return (
    <div className="App">
       <Fragment>
        <h1 id="title">가위바위보</h1>
        <h2>{getResult(me,other)}</h2>
        <p>{other}</p>
        <button onClick={() => handleClick1("scissor")}>가위</button>
        <button onClick={() => handleClick1("rock")}>바위</button>
        <button onClick={() => handleClick1("paper")}>보</button>
        <hr></hr>
        <Dice color="red" num={2}/>
        <hr/>
        <div style={{ background: 'blue' }}>
          <p>컴포넌트개념</p>
          <HandIcon value="rock" />
          <HandIcon value="scissor" />
          <HandIcon value="paper" />
        </div>
        <hr/>
        <div>
        <p>prop개념알기</p>
        <HandButton value="rock" onClick={handleClick} />
        <HandButton value="scissor" onClick={handleClick} />
        <HandButton value="paper" onClick={handleClick} />
        </div>
        <div> 
          <p>children배우기</p>
          <Button>던지기</Button>
        <Button>처음부터</Button>
        <Dice color="red" num={4} />
        </div>
        <div>
          <Button onClick={handleClearClick}>처음부터</Button>
          <HandButton value="rock" onClick={handleButtonClick} />
          <HandButton value="scissor" onClick={handleButtonClick} />
          <HandButton value="paper" onClick={handleButtonClick} />
        </div>
      </Fragment>
    </div>
  );
}

export default App;
