import React from 'react';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App2 from './App2.jsx'
import App from './App.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

//jsx대처하기

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App2 />);
