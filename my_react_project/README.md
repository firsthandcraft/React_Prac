# 0. 실행하기 

```
C:\Users\uintone\Downloads\react\React_Prac\my_react_project> npm run start
```
# 1. JSX문법
####  자바스크립트의 확장 문법
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

##### 이름없이도 사용가능하다.
```javascript
   <>
        <h2>sdfsdf</h2>
      </>
```

#### JSX작성시 속성명은 카멜 케이스로 작성
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

#### 컴포넌트 
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

#### props
:: 컴포넌트에 지정한 속성
```
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

