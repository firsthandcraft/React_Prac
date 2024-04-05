import React from 'react';
import Dice from './component/Dice';
import HandIcon from './component/HandIcon';

function Third() {

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
    </div>
  );
}

export default Third;
