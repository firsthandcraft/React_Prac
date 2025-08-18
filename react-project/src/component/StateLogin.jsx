import React, { useState,useRef, use } from 'react'
import Input from './Input'
import { useInput } from '../js/useInput';
import { isEmail, isNotEmpty, hasMinLength } from '../js/validation.js';

function StateLogin() {
  const {
    value: emailValue,
    handleInputChange :handleEmailChange,
    handleBlur: handleEmailBlur,
    hasError: emailHasError
  } =useInput('',(value)=> isEmail(value) && isNotEmpty(value));

  const {
    value: passwordValue,
    handleInputChange: handlePasswordChange,
    handleBlur: handlePasswordBlur,
    hasError: passwordHasError,
  } = useInput('', (value) => hasMinLength(value, 6));

  function handleSubmit(event) {
    event.preventDefault();
    if (emailHasError || passwordHasError) {
      return;
    }

  }

  return (
   <div>
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
        <Input label="Email" id ="email" type="email" name ="email"
        onChange={handleEmailChange}
        onBlur={handleEmailBlur}
        value={emailValue}
          error={emailHasError && 'Please enter a valid email!'}
      />
      <Input label="Password" id ="password" type="password" name ="password"
        onChange={handlePasswordChange}
        onBlur={handlePasswordBlur}
        value={passwordValue}
        error={passwordHasError ? "Please enter a valid password address" : null}

      />
      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
    </div>
  )
}

export default StateLogin
