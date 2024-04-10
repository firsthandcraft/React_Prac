import resetBtn from '../assets/ic-reset.svg';

function Button({children, onClick}) {


  return   <img class="App-reset" onClick={onClick} src={resetBtn} alt={children} />;
}

export default Button;
