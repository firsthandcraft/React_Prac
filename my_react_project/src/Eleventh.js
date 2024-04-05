import { Fragment } from 'react';
import React, { useState } from 'react';
import HandButton from './component/HandButton';
import Button from './component/Button';
import Dice from './component/Dice';
function Fifth() {
  const handleButtonClick = (value) =>alert(value);
  const handleClearClick = () => alert('처음부터');
  return (
    <div className="Fifth bundle">
        <h3 id="title" className="contentTitle">05. chilren</h3>
        <p>children배우기</p>
          {/** children사용전
           * <Button text="던지기"/>
           * <Button text="처음부터"/>
          */}
          <Button>컴포넌트임 던지기</Button>
          <Button>컴포넌트임 처음부터</Button>
          <br/>
          <br/>
          <Dice color="red" num={4} />
        
        <div>
          <Button onClick={handleClearClick}>처음부터</Button>
          <HandButton value="rock" onClick={handleButtonClick} />
          <HandButton value="scissor" onClick={handleButtonClick} />
          <HandButton value="paper" onClick={handleButtonClick} />
        </div>
    </div>
  );
}

export default Fifth;
