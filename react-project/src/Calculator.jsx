import React from 'react';
import {useState} from 'react';
import CalHeader from "./component/CalHeader.jsx";
import UserInput from "./component/UserInput.jsx";
import Results from "./component/Results.jsx";
import "./css/Calculator.css";

function Calculator() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10 // 이것만은 양수로
  });
  function handleChange (inputIdentifier, newValue) {
    setUserInput(prevUserInput => {
      return {
        ...prevUserInput,
        [inputIdentifier]: newValue
      };
    })
  }

  const inputIsValid = userInput.duration >=1;

  return (
    <>
      <CalHeader></CalHeader>
      <UserInput userInput={userInput} onChange={handleChange}/>
      {!inputIsValid && <p className="center">Please enter a valid duration (1 year or more).</p>  }
      {inputIsValid && <Results input={userInput}/>}
    </>

    )};
export default Calculator;
