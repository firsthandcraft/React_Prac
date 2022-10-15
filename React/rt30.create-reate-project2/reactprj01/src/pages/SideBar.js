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
import { Routes, Route, NavLink } from 'react-router-dom';
import { IconContext } from 'react-icons';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from '../constants/SidebarData';
const StyledsideBar = styled.div`
  /* styled 설정. https://styled-components.com/docs/basics#adapting-based-on-props */
  .menu-bars {
    margin-left: 2rem;
    font-size: 2rem;
    background: none;
  }
  .navbar {
    background-color: #060b26;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  .nav-menu {
    background-color: #060b26;
    width: 250px;
    height: 100vh;
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: -100%;
    transition: 850ms;
    z-index: 100;
  }

  .nav-menu.active {
    left: 0;
    transition: 350ms;
    z-index: 100;
  }

  .nav-text {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 8px 0px 8px 16px;
    list-style: none;
    height: 60px;
  }

  .nav-text a {
    text-decoration: none;
    color: #f5f5f5;
    font-size: 18px;
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0 16px;
    border-radius: 4px;
  }

  .nav-text a:hover {
    background-color: #1a83ff;
  }

  .nav-menu-items {
    width: 100%;
  }

  .navbar-toggle {
    background-color: #060b26;
    width: 100%;
    height: 80px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  span {
    margin-left: 16px;
  }
`;

function sideBar({ ...props }) {
  // useState 를 사용한 컴포넌트의 상태값 설정
  const [isSidebar, setIsSidebar] = useState('기본값'); // 상태값이 기본타입인 경우
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
        // console.log('sideBar >> componentDidUpdate');
      } else {
        // 마운트 완료 후에 실행됨. 한번만. focus 줄때
        // console.log('sideBar >> componentDidMount');
        refIsMounted.current = true;
      }
      return () => {
        // 언마운트 직전에 한번만 실행됨.
        // console.log('sideBar >> componentWillUmount');
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
  }; // 이벤트 핸들러 작성.
  const handlerNavLink = (e) => {
    console.log(e.targer);
    // e.stopPropagation();
    debugger;
    setIsSidebar(false);
  };
  // JSX로 화면 만들기. 조건부 렌더링: https://ko.reactjs.org/docs/conditional-rendering.html
  //className={isSidebar ? 'nav-menu active' : 'nav-menu'}
  //style={{ color: 'rgb(255, 255, 255)' }}
  //      <div className={isSidebar ? 'nav-menu active' : 'nav-menu'}>
  return (
    <StyledsideBar>
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
      <div className={isSidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul onClick={showSidebar}>
          <li className="navbar-toggle">
            <span className="menu-bars">
              <span>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ color: 'rgb(255, 255, 255)' }}
                >
                  <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z"></path>
                </svg>
              </span>
            </span>
          </li>
          <li className="nav-text">
            <NavLink to="/" onClick={handlerNavLink}>
              home
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="/counter" onClick={handlerNavLink}>
              counter
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="/recipes" onClick={handlerNavLink}>
              recipes
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="/starrating" onClick={handlerNavLink}>
              starrating
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="/crud" onClick={handlerNavLink}>
              crud
            </NavLink>
          </li>
          <li className="nav-text">
            <NavLink to="/todo" onClick={handlerNavLink} className={({ isActive }) => (isActive ? 'active' : 'inactive')}>
              todo
            </NavLink>
          </li>
        </ul>
        <IconContext.Provider value={{ color: '#fff' }}>
          <div className="navbar">
            <NavLink to="#" className="menu-bars">
              <FaIcons.FaBars onClick={handlerIsSidebar} />
            </NavLink>
          </div>
          {isSidebar && (
            <nav className="nav-menu active">
              <ul className="nav-menu-items" onClick={handlerIsSidebar}>
                <li className="navbar-toggle">
                  <NavLink to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </NavLink>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <NavLink to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </NavLink>
                    </li>
                  );
                })}
              </ul>
            </nav>
          )}
        </IconContext.Provider>
      </div>
    </StyledsideBar>
  );
}

sideBar.propTypes = {
  // props의 프로퍼티 타입 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: PropTypes.func.isRequired,
  // 인자명: PropTypes.arrayOf(PropTypes.object),
};
sideBar.defaultProps = {
  // props의 디폴트 값 설정. https://ko.reactjs.org/docs/typechecking-with-proptypes.html
  // 인자명: () => {},
  // 인자명: [],
};

export default React.memo(sideBar); // React.memo()는 props 미변경시 컴포넌트 리렌더링 방지 설정
