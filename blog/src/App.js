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

  //array특징 
  let arr2 =[1,2,3];


  //함수
  function 함수1(){
    console.log("dd");

  
  }

  return ( 
    <div className="App" style={{padding:'20px'}}>
      
      <hr/>
      <p style={{color:'red',fontSize:'20px'}}>변수쓰기</p>
      <h4>{post}</h4>
      <br/>
      <p style={{color:'red',fontSize:'20px'}}>데이터바인딩</p>
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
      <p style={{color:'red',fontSize:'20px'}}>이벤트함수 : function.console</p>
        <h4>{글제목[1]}</h4>
        <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500"
        onClick={function(){console.log(1)}}>
        👍
      </button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list border border-indigo-600 mb-5">
      <p style={{color:'red',fontSize:'20px'}}>이벤트함수 : arrowfunction.console</p>
        <h4>{글제목[2]}</h4>
        <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500"
        onClick={()=>{console.log(1)}}>
        👍
      </button>
        <p>2월 17일 발행</p>
      </div>
      <div className="list border border-indigo-600 mb-5">
        <p style={{color:'red',fontSize:'20px'}}>이벤트함수 :카운트 만들기</p>
        <h4>{글제목[2]}</h4>
        <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500"
        onClick={()=>{따봉변경(따봉+1)}}>
        👍
        </button>
        {따봉}
        <p>2월 17일 발행</p>
      </div>
      <div className="list border border-indigo-600 mb-5">
      <p style={{color:'red',fontSize:'20px'}}>이벤트함수 state변경 : reference data type 에대해</p>
        <h4>{글제목[2]}</h4>
        <button class="py-2 px-4 rounded-lg shadow-md text-white bg-blue-500"
        onClick={()=>{
          let arr = [1,2,3]; // 이럼안됨 글제목의 은 같다고 인식되어 내용이 변경되지는 않음 >> reference data type
          //...쓰기
          //해결 copy를 만들고 
          let copy =[...글제목];//독립적인 array사본이 만들어짐
          copy[2] = "청국장"; 
          글제목변경(copy);
        }}>
       글수정
        </button>
        <p>2월 17일 발행</p>
      </div>
      <Modal/>

  
    </div>
   
  );
}
//컴포넌트
function Modal(){
  return(
    <div className='modal'>
    <p style={{color:'red',fontSize:'20px'}}>컴포넌트만들기</p>
    <h4>모달</h4>
    <p>날짜</p>
    <p>상세내용</p>
  </div>
  )
}
export default App;
