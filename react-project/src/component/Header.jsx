import reactLogo from '.././assets/react-core-concepts.png'

function Header(){
  const description ="Fundamental React concepts will need for almost any app you are going to build!";
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
