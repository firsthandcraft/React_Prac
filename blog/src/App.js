/* eslilnt-disable */
import './App.css';
import { useState } from 'react';

function App() {//JSX문법
  //변수
  let post ='변수';
  //state 
  let [글제목,글제목변경]=useState(['카레집','우동집','쌀국수집']) ; 
  //state는 값이 변하면 자동 렌더링하여 같이 변한다. 
  let [따봉,따봉변경] = useState(0);

  //Destructurring 문법
  let num = [1,2]
  let [a,c]= [1,2];

  //함수
  function 함수1(){
    console.log("dd");
  }

  return ( 
    <div className="App">
      
      <hr/>
      <p style={{color:'red',fontSize:'20px'}}>변수쓰기</p>
      <h4>{post}</h4>
      <br/>
      <p style={{color:'red',fontSize:'20px'}}>변수쓰기</p>
      <div>{글제목}</div>
      <br/>
      <p> 정리 :: 변수, 데이터 바인딩은 중괄호 &#123;&#125; </p>
      <hr/>
      <br/>
      <p style={{color:'red',fontSize:'20px'}}>state함수쓰기</p>
      <div>{글제목변경}</div>
    
      <hr></hr>
      <p style={{color:'red',fontSize:'20px'}}>list 만들기</p>
      <div className="list border border-indigo-600 mb-5">
        <h4>{글제목[0]} <span></span>0</h4>
        <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500"
        onClick={console.log(1)}>
        👍
      </button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list border border-indigo-600 mb-5">
        <h4>{글제목[1]}</h4>
        <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500"
        onClick={function(){console.log(1)}}>
        👍
      </button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list border border-indigo-600 mb-5">
        <h4>{글제목[2]}</h4>
        <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500"
        onClick={()=>{console.log(1)}}>
        👍
      </button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list border border-indigo-600 mb-5">
        <h4>{글제목[2]}</h4>
        <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500"
        onClick={()=>{따봉변경(따봉+1)}}>
        👍
      </button>
      {따봉}
        <p>2월 17일 발행</p>
      </div>
      
    </div>
  );
}

export default App;
