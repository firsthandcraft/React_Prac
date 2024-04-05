const product ="macbook";
const model= "Air";
const imgUrl ="https://res.heraldm.com/content/image/2023/09/01/20230901000766_0.jpg"

function First() {
  const handleClick = (value) => console.log(value);

  return (
  <div className="First bundle">
    <h3 className="contentTitle">01. JSX에서 자바스크립트 사용하기</h3>
    <p>나만의 <strong>{product + model}</strong> 주문하기</p>
    <img src={imgUrl} style={{ width: '200px' }}/>
    <br/>
    <button onClick={() => alert('확인')}>onClick 이벤트</button>
    <button onClick={handleClick}>오브젝트속성 console로 확인</button>

    <div className="tip">
      <ul>
        <li>JSX작성시 속성명은 카멜 케이스로 작성 <br/>
            <i>onClick, onBlur, onFocus, onMouseDown, onMouseOver, tabIndex </i>
        </li>
        <li> HTML에서 비표준 속성을 다룰 때 활용하는 data-* 속성은 카멜 케이스(Camel Case)가 아니라 기존의 HTML 문법 그대로 작성</li>
      </ul>
    </div>
  </div>
);
}

export default First;