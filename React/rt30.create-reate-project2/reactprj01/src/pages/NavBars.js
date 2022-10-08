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

const StyledNavbars = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  .navbar {
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
`;

function Navbars({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [isSidebar, setIsSidebar] = useState(false);
  ('기본값'); // 상태값이 기본타입인 경우
  const [state, setState] = useState({ id: 0, name: '', age: 0 }); // 상태값이 참조타입 경우

  // useReducer 를 사용한 컴포넌트의 상태값 설정. 리듀서는 현재 상태를 받아서 새 상태를 반환하는 함수다
  const [리듀서, set리듀서] = useReducer((oldvalue, newvalue) => ({ ...oldvalue, ...newvalue }), { id: 0, name: '', age: 0 }); // 리듀서(reducer) 방식의 상태값 설정

  // ref 만들기.
  // const refInput = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        // console.log('Navbars >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('Navbars >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('Navbars >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // callback 메서드 작성. callback 메서드는 부모의 공유 상태값을 변경하기 위해서 사용된다.
  const callback = useCallback(
    (param) => {
      // state 변경
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // 이벤트 핸들러 작성.
  const handler = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
  };
  // 이벤트 핸들러 작성.
  const showSidebar = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    setIsSidebar(!isSidebar);
  };
  // 이벤트 핸들러 작성.
  const handlerIsSidebar = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    setIsSidebar(!isSidebar);
  };
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  return (
    <StyledNavbars>
      <div className="navbar">
        <span className="menu-bars" onClick={handlerIsSidebar}>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 448 512"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
            style={{ color: 'rgb(255, 255, 255)' }}
          >
            <path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
          </svg>
        </span>
      </div>
    </StyledNavbars>
  );
}

Navbars.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
Navbars.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(Navbars); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
