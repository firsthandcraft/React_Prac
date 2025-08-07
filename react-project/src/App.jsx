import { useState } from 'react'
import './css/index.css'

import './css/App.css'
import './css/info.css'
import Header from './component/Header'
import Nav from './component/Nav'
import CoreConcepts from './component/CoreConcepts'
import TabMenu from './component/TabMenu'
import TabButton3 from './component/TabButton3'
import TabButton from './component/TabButton'
import TabButton2 from './component/TabButton2'
import { EXAMPLES } from './js/data2';


function App() {
  let tabContent ='Please Click a Button';

  const [selectedTopic, setSelectedTopic] = useState('components');
  const [selectedChildrenTopic, setselectedChildrenTopic] = useState('Children');
  const [selectedTopic2, setSelectedTopic2] = useState('');
  function hadleSelect() {
    console.log("Selected");

  }
    function hadleSelect2(selectedButton) {
    console.log(selectedButton);
    tabContent = selectedButton;
    console.log(tabContent);
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
    setSelectedTopic2(selectedButton);

  }
    function hadleSelect3(selectedButton) {
    setselectedChildrenTopic(selectedButton);
    console.log(selectedButton);

  }
  let tabContentTag=<p>please select a topic </p>;
  if (selectedTopic2 ) {
    tabContentTag =(<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic2].title}</h3>
            <p>{EXAMPLES[selectedTopic2].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic2].code}</code>
            </pre></div>);
  }
  return (
    <>
      <div>
        <div className ="headerWrap">
          <h1>Header</h1>
          <h5>컴포넌트 불러오기</h5>
          <Header/>
          <h5>nav 컴포넌트 불러오기</h5>
          <Nav/>
        </div>
      <main>
        <div className ="tabWrap">
          <h5>TabMenu 컴포넌트 불러오기 PROPS</h5>
          <TabMenu/>
        </div>
        <div className ="tabButtonWrap">
          <h2>TabButton</h2>
          <ul>
            <li>Component클릭시 selected라고 콘솔에 나옴</li>
            <TabButton onSelect={hadleSelect}>Component</TabButton>
            <li>jsx,props,state클릭시 상태 값이 나오고 여기에서 useState도 같이 변함(동적)</li>
            <TabButton onSelect={() => hadleSelect2('jsx')}>JSX</TabButton>
            <TabButton onSelect={() => hadleSelect2('props')}>Props</TabButton>
            <TabButton onSelect={() => hadleSelect2('state')}>State</TabButton>
            <li>onSelect 대신 label로 만들어 하위 컴포넌트에 전달하기 </li>
            <TabButton2 label='labelComponent'>Component</TabButton2>
            <li>jsx,props,state클릭시 아래 태그 useState를 사용해서 동적으로 내용바꾸기</li>
            <li>{selectedTopic}</li>
          </ul>
        </div>
        <div className ="contentWrap">
          Dynamic Content
          <h2>selectedTopic의 내용을 아래태그와 연관짓기</h2>
          <div id='tab-content'>
            <p>EXAMPLES 안에 jsx,props,state의 제목을 찾아 아래 보여줌, 이름일치 중요 </p>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
          <h3>토픽을 클릭하면 값이 생성될수 있게 </h3>
          <p>조건연산자 &&로 가능 </p>
          {!selectedTopic2 && <p>please select a topi2 </p>}
          {!selectedTopic2 ? <p>please select a topic </p>:
          (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic2].title}</h3>
            <p>{EXAMPLES[selectedTopic2].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic2].code}</code>
            </pre></div>)}
          <p>조건연산자 &&로 가능2 </p>
            {selectedTopic2 &&
          (<div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic2].title}</h3>
            <p>{EXAMPLES[selectedTopic2].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic2].code}</code>
            </pre></div>)}
            <h3>html 태그를 변수로 넣어보기 </h3>
            {tabContentTag}
          </div>

          <div className="tagWrap">
              <h3> CSS 스타일링 및 동적 스타일링 className 넣기</h3>
              <TabButton3 isSelected={selectedChildrenTopic === 'Children'} onSelect={() => hadleSelect3('unChildren')}>
                  unChildren
              </TabButton3>
              <TabButton3 isSelected={selectedChildrenTopic === 'Children'} onSelect={() => hadleSelect3('Children')}>
                  Children
              </TabButton3>
          </div>

          <div className="contentWrap">
            <h3>리스트 동적 출력</h3>
            <CoreConcepts/>

          </div>
      </main>
    </div>
    </>
  )
}

export default App
