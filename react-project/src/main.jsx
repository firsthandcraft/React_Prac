import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//주석처리를 해야 css가 적용이 안됨
// import App2 from './App2.jsx'
// import App from './App.jsx'
import Calculator from './Calculator.jsx'


// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

//jsx대처하기

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<Calculator />);
