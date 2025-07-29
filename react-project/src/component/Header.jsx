import reactLogo from '.././assets/react-core-concepts.png'

function Header(){
  const description ="description";
  return (<>
      <header>
        <h5>이미지 불러오기</h5>
        <img src={reactLogo} alt="concepts" />
        <h1>React Essentials</h1>
        <p>
          {description}
        </p>
        </header>
  </>)
}
export default Header;
