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
import Star from "./Star";
import PropTypes from "prop-types";
import Styled from "styled-components";

function StarRating({ starSelected, handlerRate, totalStars }) {
  // 이벤트 핸들러 작성.
  const handlerClick = (i) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    // console.log(window.event.target);
    handlerRate(i + 1);
  };
  const arr = [...Array(totalStars).keys()].map((val) => val + 1);

  // JSX로 화면 만들기
  return (
    <div className="star-rating">
      {arr.map((n, i) => {
        return (
          <Star
            key={i}
            index={i}
            selected={i < starSelected}
            callbackClick={(i) => handlerClick(i)}
          />
        );
      })}

      <p>
        별점: {starSelected} / {totalStars}
      </p>
    </div>
  );
}

StarRating.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  starSelected: PropTypes.number,
  totalStars: PropTypes.number,
  handlerRate: PropTypes.func
};
StarRating.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  starSelected: PropTypes.number,
  totalStars: 5,
  handlerRate: () => {}
};

export default React.memo(StarRating); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
