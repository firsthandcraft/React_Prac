import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  useMemo,
  useReducer,
  Fragment,
  forwardRef,
  useImperativeHandle,
} from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const StyledTodoList = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */

  ul {
    list-style-type: none;
    padding-left: 0px;
    margin-top: 0;
    text-align: left;
  }

  li {
    display: flex;
    min-height: 50px;
    height: 50px;
    line-height: 50px;
    margin: 0.5rem 0;
    padding: 0 0.9rem;
    background: white;
    border-radius: 5px;
  }

  li.checked {
    background: #bbb;
    color: #fff;
    text-decoration: line-through;
  }

  .checkBtn {
    line-height: 45px;
    color: #62acde;
    margin-right: 5px;
  }

  .removeBtn {
    margin-left: auto;
    color: #de4343;
  }
`;

function TodoList({ todoItems, callbackDoneToggle, callbackRemoveTodo }) {
  const item = { id: 1, todo: '영화보기', done: false };

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    debugger;
    const id = Number(e.target.dataset.id);
    const item = JSON.parse(e.target.dataset.item); //data-item={JSON.stringify(item)}//d
    callbackDoneToggle(id);
  };
  // 이벤트 핸들러 작성.
  // const handlerDoneToggle = (id) => {
  //   // 이벤트 핸들러는 화살표 함수로 만든다
  //   // console.log(e.target);
  //   //debuger;
  //   callbackDoneToggle(id);
  // };
  // 이벤트 핸들러 작성.
  const handlerRemoveTodo = (id) => {
    // 이벤트 핸들러는 화살표 함수로 만든다

    debugger;
    callbackRemoveTodo(id);
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html

  const lis =
    todoItems &&
    todoItems.map((item) => {
      const checked = item.done == true ? 'checked' : null;

      return (
        <li
          key={item.id}
          className={item.done ? 'checked' : null}
          data-id={item.id}
          data-item={JSON.stringify(item)}
          onClick={handler}
        >
          <i aria-hidden="true" className="checkBtn fas fa-check"></i>
          {item.todo}
          <span
            type="button"
            className="removeBtn"
            onClick={(e) => {
              debugger;
              e.stopPropagation(); //이벤트 취소 버블링 방지
              handlerRemoveTodo(item.id);
            }}
          >
            <i aria-hidden="true" className="far fa-trash-alt"></i>
          </span>
        </li>
      );
    });

  return (
    <StyledTodoList>
      <section>
        <ul>{lis}</ul>
      </section>
    </StyledTodoList>
  );
}

TodoList.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // callbackDoneToggle: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  callbackDoneToggle: PropTypes.func.isRequired,
  callbackRemoveTodo: PropTypes.func.isRequired,
  todoItems: PropTypes.arrayOf(PropTypes.object),
};
TodoList.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  callbackDoneToggle: () => {},
  callbackRemoveTodo: () => {},
  todoItems: [],
};

export default React.memo(TodoList); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
