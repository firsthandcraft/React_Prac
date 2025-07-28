export default function TabButton2({label}){

  function clickHandler(){
    console.log('HelloWorld');
  }
  return <li>
   <button onClick={clickHandler}>{label}
    </button>
  </li>
}
