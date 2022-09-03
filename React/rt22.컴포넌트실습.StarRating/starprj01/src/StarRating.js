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
import Star from "./Star";

function StarRating({ starSelected, totalStars, callbackOnRate }) {
  // 이벤트 핸들러 작성.
  const handlerClick = (i) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(window.event.target);
    callbackOnRate(i + 1);
  };

  /* <Star selected={true}></Star>
        <Star selected={true}></Star>
        <Star selected={true}></Star>
        <Star></Star>
        <Star></Star> */
  // JSX로 화면 만들기
  return (
    <div>
      StarRating
      <div className="star-rating">
        {[1, 2, 3, 4, 5].map((value, index) => {
          <Star
            key={index}
            selected={index < starSelected}
            onClick={() => handlerClick(index)}
          ></Star>;
        })}
        <p>
          별점: {starSelected}/ {totalStars}
        </p>
      </div>
    </div>
  );
}

StarRating.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  starSelected: PropTypes.number.isRequired,
  totalStars: PropTypes.number.isRequired,
  callbackOnRate: PropTypes.func.isRequired
};
StarRating.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  starSelected: 0,
  totalStars: 5,
  callbackOnRate: () => {}
};

export default React.memo(StarRating); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
