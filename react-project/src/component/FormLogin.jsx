import React, { useState,useRef } from 'react'

export default function FormLogin() {
  const [enteredEmail,setEnteredEmail] = useState('');
  const [enteredPassword,setEnteredPassword] = useState('');
  const [enteredValues,setEnteredValues] = useState({
    email: '',
    password: ''
  });
  const useName = useRef();


  function handleEmailChange(event) {
    setEnteredEmail(event.target.value);
    console.log("enteredEmail:", enteredEmail);
    console.log("Email changed:", event.target.value);

  }
  function handlePasswordChange(event) {
    setEnteredPassword(event.target.value);
    console.log("enteredPassword:", enteredPassword);
    console.log("Password changed:", event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    console.log(enteredValues);
    //ref의 값을 참조할때
    const enteredName= useName.current.value;
    console.log("Name:", enteredName);
  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    console.log(value);
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email"
            onChange={(e)=>handleInputChange('email', e.target.value)}
            value={enteredValues.email.value}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
            onChange={(e)=>handleInputChange('password', e.target.value)}
            value={enteredValues.password.value}
          />
        </div>
      </div>
      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="name">Name</label>
          <input id="name" type="string" name="name"
          ref ={useName}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="age">age</label>
          <input id="age" type="number" name="age"

          />
        </div>
      </div>
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
    </div>
  )
}
