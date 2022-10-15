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

const StyledCounter = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  .conterWrap {
    text-align: center;
    display: flex;
    height: 400px;
    flex-direction: column;
    justify-content: space-around;
  }
  .BTWrap {
    width: 20%;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
  }
`;

function Counter({ welcome, counter, callback, handlerChangeCallapi }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [header, setHeader] = useState('redux 사용 앱'); // 상태값이 기본타입인 경우
  const [state, setState] = useState({ id: 0, name: '', age: 0 }); // 상태값이 참조타입 경우
  //기본타입인 경우
  const [callapi, setCallapi] = useState(true); // 상태값이
  // useReducer 를 사용한 컴포넌트의 상태값 설정. 리듀서는 현재 상태를 받아서 새 상태를 반환하는 함수다
  const [리듀서, set리듀서] = useReducer((oldvalue, newvalue) => ({ ...oldvalue, ...newvalue }), { id: 0, name: '', age: 0 }); // 리듀서(reducer) 방식의 상태값 설정

  // ref 만들기.
  const refInputApi = useRef();

  // refIsMounted는 생명주기의 마운트와 업데이트를 구분하기 위한 ref
  const refIsMounted = useRef(false);
  useEffect(
    () => {
      if (refIsMounted.current) {
        // 업데이트 될 때마다 실행됨. 여러번. state 가 변경될 때마다
        console.log('componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        console.log('componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('Counter >> componentWillUmount');
      };
    },
    [
      /* 연관배열: 메서드와 연관되는 상태(변수)명들을 기술 */
    ],
  );

  // 이벤트 핸들러 작성.
  const handlerIncrement = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);
    //debugger;
    //->reducer를 사용할때
    // setCounter(counter + 1);
    //const action = actions.setTaskReducer({ counter: counter + 1 });
    //dispatch(action);

    //debugger;
    //saga를 사용할때
    // http://localhost:5050/counter?step=1   ==> 1 씩 증가
    const payload = { step: +1 };
    // const action = actions.setTaskSaga(payload);
    // 액션함수를 이용하여 전달될 action 생성
    // dispatch(action); // action 을 saga 로 (dispatch )
    callback(payload);
    //보내기;
  };
  // 이벤트 핸들러 작성.
  const handlerDecrement = (e) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(e.target);

    //->reducer를 사용할때
    // setCounter(counter - 1);
    //const action = actions.setTaskReducer({ counter: counter - 1 });
    //debugger;

    //saga를 사용할때
    // http://localhost:5050/counter?step=-1   ==> -1 씩 증가
    const payload = { step: -1 };
    //const action = actions.setTaskSaga(payload); // 액션함수를 이용하여 전달될 action 생성
    //dispatch(action); //dispatch는 saga로
    callback(payload);
  };

  return (
    <StyledCounter>
      <div className="conterWrap">
        <h1>{header}</h1>
        <h2>{welcome}</h2>
        <h3>{counter}</h3>
        <div>
          <input type="checkbox" defaultChecked={callapi} ref={refInputApi} onChange={handlerChangeCallapi} />
          외부 api 호출
        </div>
        <div className="BTWrap">
          <button onClick={handlerIncrement}>더해줘</button>
          <button onClick={handlerDecrement}>빼줘</button>
        </div>
      </div>
    </StyledCounter>
  );
}

Counter.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
  welcome: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  callback: PropTypes.func.isRequired,
  handlerChangeCallapi: PropTypes.func.isRequired,
  handlerIncrement: PropTypes.func.isRequired,
  handlerDecrement: PropTypes.func.isRequired,
};
Counter.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
  welcome: '',
  counter: 0,
  callback: () => {},
  handlerChangeCallapi: () => {},
  handlerIncrement: () => {},
  handlerDecrement: () => {},
};

export default React.memo(Counter); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
