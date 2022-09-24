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
import styled, { css } from "styled-components";
// import { useDispatch, useSelector } from 'react-redux';
// import { BrowserRouter, Routes, Route, Link, NavLink, useParams, useLocation, useHistory, useNavigate } from 'react-router-dom';

// import { action함수 as actions, action상수 as types } from './action';

/* const {aaa, bbb, ...props} = props */
function CrudListItem({
  item,
  callbackDel,
  callbackUp,
  callbackDown,
  callbackSave
}) {
  const [isEditMode, setIsEditMode] = useState(false); // 상태값이 기본타입인 경우

  // 이벤트 핸들러 작성.
  const handlerDel = () => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(window.event.target);
    debugger;
    callbackDel(/*삭제될 정보를 넘긴다.*/ item);
  };
  const handlerUp = () => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(window.event.target);
    debugger;
    callbackUp(/*변경될 정보를 넘긴다.*/ item);
  };
  const handlerDown = () => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(window.event.target);
    debugger;
    callbackDown(/*변경될 정보를 넘긴다.*/ item);
  };
  const handlerEdit = () => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(window.event.target);
    //isEditMode 값 변경하기
    setIsEditMode(!isEditMode);
  };
  const handlerSave = (event) => {
    // 이벤트 핸들러는 화살표 함수로 만든다
    console.log(window.event.target);
    setIsEditMode(!isEditMode);

    //유효성 검사 CrudInput 참조하여 코드를 완성하시오
    //name의 입력여부 검사
    if (!refInputName.current.value || !refInputName.current.value.trim()) {
      alert("name을 입력하세요.");
      refInputName.current.focus();
      event.stopPropagation();
      event.preventDefault();
      return false;
    }
    //power의 입력여부 검사
    if (!refInputPower.current.value || !refInputPower.current.value.trim()) {
      alert("power을 입력하세요.");
      refInputPower.current.focus();
      event.stopPropagation();
      event.preventDefault();
      return false;
    }

    //변경될 정보를 만든다.
    const newitem = {
      id: item.id,
      name: refInputName.current.value,
      power: Number(refInputPower.current.value)
    };
    //부모 콜백 메서드호출 . CrudContainer.callbackSave();
    callbackSave(newitem);
  };

  // ref 만들기.
  // const refInput = useRef();
  const refInputName = useRef();
  const refInputPower = useRef();

  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  //power가 300이상인 사람은 글자색을 red, bold 로 출력되게 css를 적용하시오
  let strong = "";
  if (item.power >= 300) strong = "strong";
  const formView = (
    <tr className={strong}>
      <td>{item.id}</td>
      <td>{item.name}</td>
      <td>{item.power}</td>
      <td>
        <button type="button" onClick={handlerDel}>
          Del
        </button>
        <button type="button" onClick={handlerUp}>
          Power Up
        </button>
        <button type="button" onClick={handlerDown}>
          Power Down
        </button>
        <button type="button" onClick={handlerEdit}>
          Edit
        </button>
      </td>
    </tr>
  );

  const formEdit = (
    <tr className={strong}>
      <td>{item.id}</td>
      <td>
        <input
          type="text"
          name="name"
          placeholder="이름을 입력하세요"
          defaultValue={item.name}
          ref={refInputName}
        />
      </td>
      <td>
        <input
          type="number"
          name="power"
          placeholder="숫자를 입력하세요"
          defaultValue={item.power}
          ref={refInputPower}
        />
      </td>
      <td>
        <button type="button" onClick={handlerUp}>
          Power Up
        </button>
        <button type="button" onClick={handlerDown}>
          Power Down
        </button>
        <button type="button" onClick={handlerEdit}>
          Edit
        </button>
        <button type="button" onClick={handlerSave}>
          Save
        </button>
      </td>
    </tr>
  );
  if (isEditMode === true) return formEdit; //편집용화면
  else return formView; //보기용화면
}

CrudListItem.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.string,
  // 인자명: PropTypes.oneOf(['News', 'Photos']),
  item: PropTypes.object,
  callbackDel: PropTypes.func.isRequired,
  callbackUp: PropTypes.func.isRequired,
  callbackDown: PropTypes.func.isRequired,
  callbackSave: PropTypes.func.isRequired
};
CrudListItem.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: '',
  // 인자명: 'News',
  item: {},
  callbackDel: () => {},
  callbackUp: () => {},
  callbackDown: () => {},
  callbackSave: () => {}
};

export default React.memo(CrudListItem); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
