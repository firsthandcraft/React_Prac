import { Fragment } from 'react';
import React, { useState } from 'react';
import Dice from './component/Dice';
import HandIcon from './component/HandIcon';
import HandButton from './component/HandButton';
import Button from './component/Button';

function Third() {
  const handleClick = (value) => console.log(value);
  const handleButtonClick = (value) => console.log(value);
  const handleClearClick = () => console.log('처음부터');
  const [me, setMe] = useState(null);
  const [result, setResult] = useState('');

  return (
    <div className="Third bundle">
        <h3 id="title" className="contentTitle">03. 컴포넌트만들기</h3>
        <p>SVG이미지 가져오기</p>
        <Dice color="red" num={2}/>

        <div style={{ background: 'skyblue' }}>
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
    </div>
  );
}

export default Third;
