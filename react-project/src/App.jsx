import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Nav from './component/Nav'
import TabMenu from './component/TabMenu'
import TabButton from './TabButton'
import TabButton2 from './TabButton2'


function App() {
  function hadleSelect() {
    console.log("Selected");
  }
    function hadleSelect2(selectedButton) {
    console.log(selectedButton);
  }
  return (
    <>
      <div>
        <h1>Header</h1>
        <Header/>
        <Nav/>
      <main>
        <TabMenu/>
        <h2>TabButton</h2>
        <ul>
          <TabButton onSelect={hadleSelect}>Component</TabButton>
          <TabButton onSelect={() => hadleSelect2('JSX')}>JSX</TabButton>
          <TabButton onSelect={() => hadleSelect2('Props')}>Props</TabButton>
          <TabButton onSelect={() => hadleSelect2('State')}>State</TabButton>
          <TabButton2 label='labelComponent'>Component</TabButton2>

        </ul>
        <div>
          Dynamic Content
        </div>
      </main>
    </div>
    </>
  )
}

export default App
