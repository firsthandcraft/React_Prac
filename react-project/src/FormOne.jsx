import { useState } from 'react'
import FormHeader from "./component/FormHeader.jsx";
import FormLogin from "./component/FormLogin.jsx";
import "./css/FormOne.css";



export default function FormOne() {

  return (
    <>
      <FormHeader />
      <main>
        <FormLogin />
      </main>
    </>
  )
}
