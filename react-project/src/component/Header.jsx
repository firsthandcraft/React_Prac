import reactLogo from '.././assets/react-core-concepts.png'

function Header(){
  const description ="description";
  return (<>
      <header>
        <img src={reactLogo} alt="concepts" />
        <h1>React Essentials</h1>
        <p>
          {description}
        </p>
        </header>
  </>)
}
export default Header;
