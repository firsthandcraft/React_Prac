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

import Color from "./Color";
import PropTypes from "prop-types";
import Styled from "styled-components";
// import { useDispatch, useSelector } from 'react-redux';
// import ReactRouterDOM, { BrowserRouter, Routes, Route, Switch, Redirect, Link, NavLink, useParams, useLocation, useHistory, useRouteMatch } from 'react-router-dom';

// import { action함수 as actions, action상수 as types } from './action';

/* const {aaa, bbb, ...props} = props */
function ColorList({ colors, callbackRateColor, callbackRemoveColor }) {
  // JSX로 화면 만들기
  return (
    <div className="color-list">
      {colors.map((item, index, array) => {
        // debugger;
        // {...item}을 풀어쓰면 item  ={id, title,color,rating}
        //즉 {...item} 는 id={item.id} title={item.title} color={item.color} rating={item.rating}
        return (
          <Color
            key={item.id}
            {...item}
            callbackRateColor={callbackRateColor}
            callbackRemoveColor={callbackRemoveColor}
          ></Color>
        );
      })}
    </div>
  );
}

ColorList.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.object).isRequired,
  callbackRateColor: PropTypes.func,
  callbackRemoveColor: PropTypes.func
};
ColorList.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  colors: [],
  callbackRateColor: () => {},
  callbackRemoveColor: () => {}
};

export default React.memo(ColorList); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
