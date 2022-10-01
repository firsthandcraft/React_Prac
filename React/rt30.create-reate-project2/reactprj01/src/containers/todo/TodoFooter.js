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

const StyledTodoFooter = styled.div`
  .clearAllContainer {
    width: 16rem;
    height: 50px;
    line-height: 50px;
    background-color: white;
    border-radius: 5px;
    margin: 0 auto;
  }

  .clearAllBtn {
    color: #e20303;
    display: block;
  }
`;

function TodoFooter({ callbackClearAll }) {
  // 이벤트 핸들러 작성.
  const handlerClearAll = (e) => {
    console.log(e.target);
    debugger;
    // 부모 콜백 메서드 호출
    callbackClearAll();
  };

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledTodoFooter>
      <div className="clearAllContainer">
        <span className="clearAllBtn" onClick={handlerClearAll}>
          Clear All
        </span>
      </div>
    </StyledTodoFooter>
  );
}

TodoFooter.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  callbackClearAll: PropTypes.func.isRequired,
};
TodoFooter.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  callbackClearAll: () => {},
};

export default React.memo(TodoFooter); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
