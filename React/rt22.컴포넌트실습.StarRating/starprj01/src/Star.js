import React from "react";
import PropTypes from "prop-types";

function Star({ selected, callbackonClick }) {
  const onClick = (e) => {
    console.log(e.target);
    callbackonClick();
  };
  // JSX로 화면 만들기
  const aaa = selected ? "star selected" : "star";
  return (
    <div className={aaa} onClick={onClick}>
      &nbsp;
    </div>
  );
  // return <div className={selected ? "star selected" : "star"}>&nbsp;</div>;
}

Star.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  selected: PropTypes.bool,
  callbackonClick: PropTypes.func.isRequired
};
Star.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  selected: false,
  callbackonClick: () => {}
};

export default React.memo(Star); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
