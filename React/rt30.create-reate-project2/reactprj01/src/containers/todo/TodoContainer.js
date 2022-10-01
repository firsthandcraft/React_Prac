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
import TodoHeader from './TodoHeader';
import TodoFooter from './TodoFooter';
import TodoList from './TodoList';
import TodoInput from './TodoInput';
const StyledTodoContainer = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  text-align: center;
  button {
    border-style: groove;
  }
`;

function TodoContainer({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [todoItems, setTodoItems] = useState([
    { id: 1, todo: '영화보기', done: false },
    { id: 2, todo: '주말 산책', done: true },
    { id: 3, todo: 'ES6 학습', done: false },
    { id: 4, todo: '잠실 야구장', done: false },
  ]);

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  //useCallback 은 상태값이 변경되면 메서드를 다시 만들고
  //자식들에게 변경된 함수(메서드)를 다시 내려준다.
  const callbackClearAll = useCallback(() => {
    // state 변경
    debugger;
    //setTodoItems 는 todoItems 상태를 바꾸기 위한 setter메서드
    //todoItems = [setTodoItems];
    setTodoItems([]);
  }, [/* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */ todoItems]);

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callbackDoneToggle = useCallback(
    (id) => {
      // state 변경
      debugger;
      const newTodos = todoItems.map((item) => {
        if (item.id === id) {
          item.done = !item.done;
        }
        return item;
      });

      setTodoItems(newTodos);
    },
    [/* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */ todoItems],
  );
  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callbackRemoveTodo = useCallback(
    (id) => {
      debugger;
      // state 변경
      const newTodos = todoItems.filter((item) => {
        if (item.id === id) {
          return false; //빼는경우
        }
        return true; //포함되는경우
      });

      setTodoItems(newTodos);
    },
    [todoItems],
  );

  const callbackAddTodo = useCallback(
    (value)=>{
      const maxid = items.map((id)) => {
        return todoItems.id;
      }
      debugger;
    }
  );
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoContainer>
      <div>
        <TodoHeader></TodoHeader>
        {/*<div className="inputBox shadow">
          <input type="text" placeholder="Type what you have to do" />
          <span className="addContainer">
            <i aria-hidden="true" className="addBtn fas fa-plus"></i>
          </span>

          <div className="modal-mask" style={{ display: 'none' }}>
            <div className="modal-wrapper">
              <div className="modal-container">
                <div className="modal-header">
                  <h3 slot="header">경고</h3>
                </div>

                <div className="modal-footer">
                  <span>
                    할 일을 입력하세요.
                    <i className="closeModalBtn fas fa-times" aria-hidden="true"></i>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div> */}
        <TodoInput callbackAddTodo={callbackAddTodo}></TodoInput>
        <TodoList
          todoItems={todoItems}
          callbackDoneToggle={callbackDoneToggle}
          callbackRemoveTodo={callbackRemoveTodo}
        ></TodoList>
        <TodoFooter callbackClearAll={callbackClearAll}></TodoFooter>
      </div>
      {/* <!--dd-->를 edit >toggle line comment */}
    </StyledTodoContainer>
  );
}

TodoContainer.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
TodoContainer.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(TodoContainer); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
