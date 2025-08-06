import { useState } from 'react'
import './App.css'
import Header from './component/Header'
import Nav from './component/Nav'
import CoreConcepts from './component/CoreConcepts'
import TabButton3 from './component/TabButton3'
import TabButton from './TabButton'
import TabButton2 from './TabButton2'
import { EXAMPLES } from './js/data2';


function App() {
  let tabContent ='Please Click a Button';

  const [selectedTopic, setSelectedTopic] = useState();
  const [selectedChildrenTopic, setselectedChildrenTopic] = useState('Children');
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }
  let tabContentTag=<p>please select a topic </p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  //콘텐츠 컴포넌트로 나누기
  return (
    <>

      <div>
        <div>
          <Header/>
        </div>
      <main>
        <CoreConcepts/>

        <section id="examples">
        <h2>Examples</h2>
        <menu>
          <TabButton
            isSelected={selectedTopic === "components"}
            onSelect={() => handleSelect("components")}
          >
            Components
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "jsx"}
            onSelect={() => handleSelect("jsx")}
          >
            JSX
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "props"}
            onSelect={() => handleSelect("props")}
          >
            Props
          </TabButton>
          <TabButton
            isSelected={selectedTopic === "state"}
            onSelect={() => handleSelect("state")}
          >
            State
          </TabButton>
        </menu>
        {tabContent}
      </section>

      </main>
    </div>
    </>
  )
}

export default App
