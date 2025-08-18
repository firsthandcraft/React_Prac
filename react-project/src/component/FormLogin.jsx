import React, { useState,useRef } from 'react'

export default function FormLogin() {
  const [enteredEmail,setEnteredEmail] = useState('');
  const [enteredPassword,setEnteredPassword] = useState('');
  const [enteredValues,setEnteredValues] = useState({
    email: '',
    password: '',
    name: '',
    age: ''
  });
  const [passwordAreNotEqual, setPasswordAreNotEqual] = useState(false);


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

    //d우ㅠ효성
      const fd = new FormData(event.target);
      const data = Object.fromEntries(fd.entries());
      console.log("FormData:", data);
      if(data.password !== data['test2']){
        setPasswordAreNotEqual(true);
        return;
      }

  }

  function handleInputChange(identifier, value) {
    setEnteredValues(prevValues => ({
      ...prevValues,
      [identifier]: value
    }));
    console.log(value);
  }

  //   유효성
  const emailIsValid = enteredValues.email !== '' && !enteredValues.email.includes('@');
  //유효성 blur
  const [didEdit,setDidEdit] = useState({
    name: false,
    age: false
  });
  const useName = useRef();
  function handleBlur(identifier) {
      setDidEdit(prevEdit => ({
        ...prevEdit,
        [identifier]: true,
      }));
  }
  const nameIsValid = didEdit.name && enteredValues.name.trim() === '';

  //


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
          <div className="control-error">{emailIsValid && <p>please enter email address</p>}</div>
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
            onBlur={() => handleBlur('name')}
            value={enteredValues.name.value}
          ref ={useName}
          />
          <div className="control-error">{nameIsValid && <p>please type name</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="age">age</label>
          <input id="age" type="number" name="age"
            onBlur={() => handleBlur('age')}
          />
        </div>

        <div className="control no-margin">
          <label htmlFor="test2">password confirm</label>
          <input id="test2" type="string" name="test2"
          />
          <div className="control-error">{passwordAreNotEqual && <p>password must match</p>}</div>
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
