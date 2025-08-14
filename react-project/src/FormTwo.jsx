import { useState } from 'react'
import FormHeader from "./component/FormHeader.jsx";
import StateLogin from "./component/StateLogin.jsx";
import "./css/FormOne.css";



export default function FormTwo() {

  return (
    <>
      <FormHeader />
      <main>
        <StateLogin />
      </main>
    </>
  )
}
