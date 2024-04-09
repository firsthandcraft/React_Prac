import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import reportWebVitals from './reportWebVitals';
import First from './First';
import Second from './Second';
import Third from './Third';
import Fourth from './Fourth';
import Fifth from './Fifth';
import Sixth from './Sixth';


const root = ReactDOM.createRoot(document
.getElementById('root'));
root.render(//렌더
  <>
    <First />
    <Second />
    <Third />
    <Fourth />
    <Fifth />
    <Sixth />
  </>
);
/** 아래와 같이도 가능 이것을 
const element = <h1>안녕 리액트!</h1>;
console.log(element);
ReactDOM.render(element, document.getElementById('root')); */
reportWebVitals();
