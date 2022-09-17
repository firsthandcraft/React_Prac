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
import PropTypes from "prop-types";
import Styled from "styled-components";
// import { useDispatch, useSelector } from 'react-redux';
// import ReactRouterDOM, { BrowserRouter, Routes, Route, Switch, Redirect, Link, NavLink, useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';

// import { action함수 as actions, action상수 as types } from './action';

/* const {aaa, bbb, ...props} = props */
function Star({ index, selected, callbackClick }) {
  // 이벤트 핸들러 작성.
  const handler = () => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(window.event.target);
    callbackClick(index);
    //debugger;
  };

  // JSX로 화면 만들기
  if (selected) {
    return <div className="star selected" onClick={handler}></div>;
  }
  return <div className="star" onClick={handler}></div>;
}

Star.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  index: PropTypes.number,
  callbackClick: PropTypes.func.isRequired
};
Star.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  selected: false,
  index: 0,
  callbackClick: () => {}
};

export default React.memo(Star); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
