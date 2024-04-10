import { Fragment } from 'react';
import { useState } from 'react';
import HandButton from './component/HandButton';
import Button from './component/Button';
import Dice from './component/Dice';
function random (n){
  return Math.ceil(Math.random()*n);
}
function Eighth() {
  const handleButtonClick = (value) =>alert(value);
  //const handleClearClick = () => alert('처음부터');
  const [num,setNum]= useState(1);
  const [sum,setSum]= useState(0);
  const [gameHistory,setGameHistory]= useState([]);
  const handRollClick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum+nextNum);
    gameHistory.push(nextNum);
    //setGameHistory(gameHistory);
    /** setNum(nextNum);
    setSum(sum+nextNum);를 주석처리하면 안된다 
    이유 :: gameHistory가 배열이라서 배열은 참조형이라 배열의 주소값을 가져와서 
    배열의 요소가 바뀌어도 주소값이 그대로라서 state가 변경되었다 판단이 안되다.
    해결 법 :참조형 타입 을 변경시 새로 만드는것으로 제작하기 >>  spread사용하기 */
    setGameHistory([...gameHistory,nextNum]);
  }
  const handleClearClick=() =>{
    setNum(1);
    setNum(0);
    setGameHistory([]);
  }
  return (
    <div className="Eighth bundle">
        <h3 id="title" className="contentTitle">8. 참조형 State</h3>
        <p>잘못된 방법부터 해보기</p>
          <Button onClick={handRollClick}>컴포넌트임 던지기</Button>
          <Button onClick={handleClearClick}>컴포넌트임 처음부터</Button>
          <br/>
          <br/>
          <Dice color="blue" num={num} />
          <p>총점</p>
          <p>{sum}</p>
          <p>기록</p>
          <p>{gameHistory.join(', ')}</p>
        <div>
         
        </div>
    </div>
  );
}

export default Eighth;
