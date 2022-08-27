import logo from "./logo.svg";
import "./App.css";
import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle
} from "react";
import Recipe from "./Recipe";
//import Recipe from "./Recipe"; //export default인경우

//.MENU
function Menu({ title, recipes }) {
  // 컴포넌트의 상태값 설정
  // 상태값이 기본타입인 경우
  // JSX로 화면 만들기
  return (
    <article>
      <header>
        <h1>{title}</h1>
      </header>
      <div className="recipes">
        {recipes.map((recipe, i) => (
          <Recipe key={i} {...recipe} />
        ))}
      </div>
    </article>
  );
}
export default Menu;

//export Aaa;
// import { Aaa} from "";

// export default Bbb;
// import Aaa from "";
