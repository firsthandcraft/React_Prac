import { Fragment } from 'react';
import React, { useState } from 'react';
import HandButton from './component/HandButton';
import Button from './component/Button';
import Dice from './component/Dice';
import imgUrl from './img/site_settings_components.png';
function Fourth() {
  const handleClick = (value) => console.log(value);
  const handleButtonClick = (value) => console.log(value);
  const handleClearClick = () => console.log('처음부터');
  const [me, setMe] = useState(null);
  const [result, setResult] = useState('');


  return (
    <div className="Fourth bundle">
        <h3 id="title" className="contentTitle">04. props</h3>
        <p>props는 컴포넌트에 지정한 속성</p>
        <HandButton value="rock" onClick={handleClick} />
        <HandButton value="scissor" onClick={handleClick} />
        <HandButton value="paper" onClick={handleClick} />
        <div className="tip">
          <ul>
            <li>props는 관리자창에서 componetns 에서 value를 볼수 있다.  <br/>
                <img src={imgUrl} style={{ width: '100%', border:'1px solid #777', borderRadius:'20px',  boxShadow: '4px 4px 4px rgba(0, 0, 0, 0.25)'}}/>
            </li>
          </ul>
        </div>
    </div>
  );
}

export default Fourth;
