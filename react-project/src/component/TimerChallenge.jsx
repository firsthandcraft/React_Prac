import React, { useState, useRef, useEffect, use } from 'react';
import ResultModal from "./ResultModal.jsx";

function TimerChallenge({title,targetTime}) {
  const [timerExpired, setTimerExpired] = useState(false);
  const timer = useRef(null);
  const dialog = useRef(null);
  /* //setTimeout setInterval 비교
  ------ 딱 한 번 실행 → setTimeout
  ------ 반복 실행 → setInterval

  // setTimeout 코드
  const [timerStarted, setTimerStarted] = useState(false);

  function handleStart() {
   timer.current = setTimeout(() => {

   }, interval); (() => {
      setTimerExpired(true);
      dialog.current.open();//자식 컴포넌트에 전달 open 함수 호출
    }, targetTime * 1000);
    setTimerStarted(true);
  }
    function handleStop() {
    clearTimeout(timer.current);
  }
  //return 에서
  {timerExpired && <ResultModal ref = {dialog} targetTime={targetTime} result = "lost"/>}
  <section className="challenge">
  <h2>{title}</h2>
  {timerExpired  && <p>you lost</p>}
  <p className="challenge-time">
    {targetTime} second{targetTime >1 ? 's' : ''}
  </p>
  <p>
    <button onClick={timerStarted ? handleStop : handleStart}>
      {timerStarted ? 'Stop':'Start'} Challenge
    </button>
  </p>
  <p className={timerStarted ? 'active' : undefined}>
    {timerStarted ? 'Time is runnuing...':'Timer inactive'}
  </p>
  </section>
  */

  //setInterval
  const [timeRemaining, setTimeRemaining] = useState(targetTime* 1000);
  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if(timeRemaining <= 0 ){
    clearInterval(timer.current); //반복 실행을 멈춤
    // setTimeRemaining(targetTime * 1000);
    // console.log("timeRemaining"+timeRemaining);
    dialog.current.open();
  }
  function handleReset() {
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
   timer.current = setInterval(() => {
      setTimeRemaining(prevTimeReamaining => prevTimeReamaining -10) //prevTimeReamaining:: React가 이전 상태값
    }, 10);
    // setTimerStarted(true);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current); //반복 실행을 멈춤
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handleReset}
      />

      <section className="challenge">
        <h2>{title}</h2>
        {timerExpired  && <p>you lost</p>}
        <p className="challenge-time">
          {targetTime} second{targetTime >1 ? 's' : ''}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? 'Stop':'Start'} Challenge
          </button>
        </p>
        <p className={timerIsActive ? 'active' : undefined}>
          {timerIsActive ? 'Time is runnuing...':'Timer inactive'}
        </p>
      </section>
    </>
  );
}

export default TimerChallenge;
