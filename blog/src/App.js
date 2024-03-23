import './App.css';
import { useState } from 'react';

function App() {
  let post ='맞깁';
  //state 
  let [글제목,b]=useState('넘자코드추천') ; //Destructurring 문법
  return (
    <div className="App">
      <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500">
        Click me
      </button>
      <h4>{post}</h4>
      <div>{글제목}</div>
      <div>{b}</div>
    </div>
  );
}

export default App;
