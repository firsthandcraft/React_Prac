# 0. 실행하기 

```
C:\Users\uintone\Downloads\react\React_Prac\my_react_project> npm run start
```
# 1. JSX문법
####  자바스크립트의 확장 문법 , react를 사용하기 위해 만들어짐
## JS파일에 div로 감싸 html태그를 사용하는 방법
### class -> className ,onBlur 와 같이 카멜케이스로 작성한다. 
### label 태그의for  -> htmlFor로 작성 


---
# 2. 프래그먼트 
## JSX를 작성할때 하나의 태그로 작성해야하는데 빈 태그를 만드는게 프래그먼트
```javascript
   <Fragment>
        <h2>sdfsdf</h2>
      </Fragment>
```
* 이름없이도 사용가능하다.
```javascript
   <>
        <h2>sdfsdf</h2>
      </>
```

# 3. JSX작성시 속성명은 카멜 케이스로 작성
이런 속성들은 모두 onClick, onBlur, onFocus, onMouseDown, onMouseOver, tabIndex 
```javascript
import ReactDOM from 'react-dom';

ReactDOM.render(
  <button onClick= ... >클릭!</button>,
  document.getElementById('root')
);
```
#### 예외
 HTML에서 비표준 속성을 다룰 때 활용하는 data-* 속성은 카멜 케이스(Camel Case)가 아니라 기존의 HTML 문법 그대로 작성
```javascript
import ReactDOM from 'react-dom';

ReactDOM.render(
  <div>
    상태 변경: 
    <button className="btn" data-status="대기중">대기중</button>
    <button className="btn" data-status="진행중">진행중</button>
    <button className="btn" data-status="완료">완료</button>
  </div>,
  document.getElementById('root')
);
```

#### 자바스크립트 예약어와 같은 속성명은 사용불가
https://ko.legacy.reactjs.org/docs/dom-elements.html#differences-in-attributes 
``` javascript
import ReactDOM from 'react-dom';

ReactDOM.render(
  <form>
    <label htmlFor="name">이름</label>
    <input id="name" className="name-input" type="text" />
  </form>,
  document.getElementById('root')
);
```

# 4. 컴포넌트 
-- 장점 :: 하나의 태그처럼 활용
-- 유의 ::  첫 글자를 대문자로 작성
``` javascript
import Dice from './Dice';
function App() {
  return (ㄴ
    <div>
      <Dice />
    </div>
  );
}
export default App;
```
# 5. 엘리먼트 
{$$typeof: Symbol(react.element), type: "h1", key: null, ref: null, props: {…}, …}
이런 객체를 리액트 엘리먼트

이 리액트 엘리먼트를 ReactDOM.render 함수의 아규먼트로 전달하게 되면, 리액트가 객체 형태의 값을 해석해서 HTML 형태로 브라우저에 띄워줌.

리액트 엘리먼트는 리액트로 화면을 그려내는데 가장 기본적인 요소

# 6. props
:: 컴포넌트에 지정한 속성
:: Properties의 약자
* 컴포넌트에 속성을 지정해주면 각 속성이 하나의 객체로 모여서 컴포넌트를 정의한 함수의 첫 번째 파라미터로 전달
```javascript
import Dice from './Dice';
function App() {
  return (
    <div>
      <Dice color="blue" />
    </div>
  );
}
export default App;
```
# 7. children
* 직관적으로 코드를 짤수 있다. 
```javascript
 {/** children사용전
           * <Button text="던지기"/>
           * <Button text="처음부터"/>
          */}
  <Button>던지기</Button>
  <Button>처음부터</Button>
```
```javascript
//Button 컴포넌트
function Button({children, onClick}) {
  return <button onClick={onClick}>{children}</button>;
}
export default Button;
```

# 8. state
상태가 바뀔 때마다 화면을 새롭게 그려내는 방식으로 동작
리액트에서 state를 만들고, state를 바꾸기 위해서는 일단 useState라는 함수를 활용해야 합니다.
01. import하기
```javascript
import React, { useState } from 'react';
  const [num, setNum] = useState(1);
  //첫 번째 요소가 바로 state이고, 두 번째 요소가 이 state를 바꾸는 setter 함수
  //참고로 위 코드에서도 볼 수 있듯 첫 번째 변수는 원하는 state의 이름(num)을 지어주고, 두 번째 변수에는 state 이름 앞에 set을 붙인 다음 카멜 케이스로 이름을 지어주는 것(setNum)이 일반적
  //보통 이렇게 Destructuring 문법으로 작성
```
```javascript
import { useState } from 'react';
import Button from './Button';
import Dice from './Dice';

function App() {
  const [num, setNum] = useState(1);

  const handleRollClick = () => {
    setNum(3); // num state를 3으로 변경!
  };

  const handleClearClick = () => {
    setNum(1); // num state를 1로 변경!
  };

  return (
    <div>
      <Button onClick={handleRollClick}>던지기</Button>
      <Button onClick={handleClearClick}>처음부터</Button>
      <Dice color="red" num={num} />
    </div>
  );
}

export default App;

```

02. 참조형 State
 자료형은 크게 기본형(Primitive type)과 참조형(Reference type)로 구분
 ```javascript
 // ... 

  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    gameHistory.push(nextNum);
    setGameHistory(gameHistory); // state가 제대로 변경되지 않는다!
  };

// ...
 ```
 * gameHistory state는 배열 값 자체를 가지고 있는 게 아니라 그 배열의 주솟값을 참조하기 때문에 변경안됨 -==> 새로운 참조형 값을 만들어 state를 변경 > spread문법사용하기 
```javascript
// ... 

  const [gameHistory, setGameHistory] = useState([]);

  const handleRollClick = () => {
    const nextNum = random(6);
    setGameHistory([...gameHistory, nextNum]); // state가 제대로 변경된다!
  };

// ...

```