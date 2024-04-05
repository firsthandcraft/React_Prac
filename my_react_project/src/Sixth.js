import React, { useState } from 'react';
import Button from './component/Button';
import Dice from './component/Dice';
function Sixth() {
  //
  const [num,setNum] = useState(1);

  return (
    <div className="Sixth bundle">
        <h3 id="title" className="contentTitle">06. state</h3>
        <p></p>
          {/** children사용전
           * <Button text="던지기"/>
           * <Button text="처음부터"/>
          */}
          <Button> 던지기</Button>
          <Button> 처음부터</Button>
          <br/>
          <br/>
          <Dice color="red" num={4} />
    </div>
  );
}

export default Sixth;
