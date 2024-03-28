import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const product ="macbook";
const imgUrl ="https://res.heraldm.com/content/image/2023/09/01/20230901000766_0.jpg"
function handleClick(){
  alert('도착합니다.');
}
const root = ReactDOM.createRoot(document

.getElementById('root'));
root.render(//렌더
  <>
    <h1>나만의 {product}주문하기</h1>
    <img src={imgUrl} style={{ width: '200px' }}/>
    <button onClick={() => console.log('확인')}>확인ㄴ</button>
    <button onClick={handleClick}>도착</button>
    <App />
  </>


    
);

reportWebVitals();
