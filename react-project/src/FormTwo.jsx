import { useState } from 'react'
import FormHeader from "./component/FormHeader.jsx";
import Signup from "./component/Signup.jsx";
import StateLogin from "./component/StateLogin.jsx";
import "./css/FormOne.css";
import FormLogin from "./component/FormLogin.jsx";



export default function FormTwo() {

  return (
    <>
      <FormHeader />
      <main>
        <Signup />
        {/* <FormLogin /> */}
        <StateLogin />
      </main>
    </>
  )
}
