import {useRef,useState} from 'react';


export default function Player() {
  const [enteredPlayerName, setEnteredPlayerName] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const playerName= useRef();

  function handleChange(e){
    setSubmitted(false);
    setEnteredPlayerName(e.target.value);
  }
  function handleClick(e){
    // setSubmitted(true);
    if(playerName.current.value == ''){
      alert('Please enter a name');
      setEnteredPlayerName(null);

    }else{
    setEnteredPlayerName(playerName.current.value);

    }
  }

  return (
    <section id="player">
      <p>ref는 값이 변해도 함수 재실행 없음</p>
      {/*ref를 안쓸경우 <h2>Welcome {submitted ? enteredPlayerName: 'unknown entity'}</h2> */}
      <h2>Welcome {enteredPlayerName ?? 'unknown entity'}</h2>
      <p>
        <input ref = {playerName} type="text" />
        {/* <!--onChange={handleChange} value={enteredPlayerName}ref있으면 없어도됨 --> */}
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
