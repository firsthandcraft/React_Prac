import { useImperativeHandle,forwardRef } from "react" //19버전 이하인것 하지만 부모 값을 전달받기 위해
import { useRef, useEffect } from "react";
import { createPortal } from 'react-dom';

const ResultModal =forwardRef(function ResultModal({ targetTime, remainingTime, onReset },ref) {
  const dialog = useRef(null);
  const userLost = remainingTime <= 0;
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  //toFixed는 자바스크립트 숫자(Number) 타입에서 사용할 수 있는 메서드로, 숫자를 소수점 아래 원하는 자리 수까지 반올림하여 문자열로 반환
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref,()=>{
    return {
      open(){
        dialog.current.showModal();
      }
    }
  });

  return createPortal(
    <dialog ref={dialog} className= "result-modal" > //open
      {userLost && <h2>You lost</h2>}
      {!userLost && <h2>Your Score: {score}</h2>}
      <p>The target Time was <strong>{targetTime} seconds.</strong> </p>
      <p>You stopped the timer with {' '}<strong>{formattedRemainingTime}  seconds left</strong></p>
      <form method ="dialog" onSubmit={onReset}>
        <button>close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});
export default ResultModal;
