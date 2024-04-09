import React, { useState } from 'react';
import Button from './component/Button';
import Dice from './component/Dice';
function random (n){
  return Math.ceil(Math.random()*n);
}
function Sixth() {
  //[state값 , setter함수]
  const [num,setNum] = useState(1);
  const handleRollClick = () =>{
    const nextNum = random(6);
    setNum(nextNum);
  }
  const handleClearClick = () =>{setNum(1);}

  return (
    <div className="Sixth bundle">
        <h3 id="title" className="contentTitle">06. state</h3>
        <p></p>
          {/** children사용전
           * <Button text="던지기"/>
           * <Button text="처음부터"/>
          */}
          <Button onClick={handleRollClick}> 던지기</Button>
          <Button onClick={handleClearClick}> 처음부터</Button>
          <br/>
          <br/>
          <Dice color="red" num={num} />
    </div>
  );
}

export default Sixth;
