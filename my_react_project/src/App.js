import './App.css';
import { Fragment } from 'react';

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
  return (
    <div className="App">
       <Fragment>
        <h1 id="title">가위바위보</h1>
        <h2>{getResult(me,other)}</h2>
        <p>{other}</p>
        <button onClick={() => handleClick1("scissor")}>가위</button>
        <button onClick={() => handleClick1("rock")}>바위</button>
        <button onClick={() => handleClick1("paper")}>보</button>
      </Fragment>
    </div>
  );
}

export default App;
