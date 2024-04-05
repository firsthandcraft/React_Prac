import diceBlue01 from '../assets/dice-blue-1.svg';
import diceBlue02 from '../assets/dice-blue-2.svg';
import diceBlue03 from '../assets/dice-blue-3.svg';
import diceBlue04 from '../assets/dice-blue-4.svg';
import diceBlue05 from '../assets/dice-blue-5.svg';
import diceBlue06 from '../assets/dice-blue-6.svg';
import diceRed01 from '../assets/dice-red-1.svg';
import diceRed02 from '../assets/dice-red-2.svg';
import diceRed03 from '../assets/dice-red-3.svg';
import diceRed04 from '../assets/dice-red-4.svg';
import diceRed05 from '../assets/dice-red-5.svg';
import diceRed06 from '../assets/dice-red-6.svg';
/** props라는 파라미터를 하나 만들기
{ color: "blue" } */
const DICE_MAGES = {
  blue: [diceBlue01,diceBlue02,diceBlue03,diceBlue04,diceBlue05,diceBlue06],
  red:[diceRed01,diceRed02,diceRed03,diceRed04,diceRed05,diceRed06],
}
/*function Dice(props) {
  console.log(props);
  const src = DICE_MAGES[props.color][props.num-1];
  const alt = `${props.color} ${props.num}`;
  const diceImg = props.color === 'red' ? diceRed01 :diceBlue01;
  return <img src={src} alt={alt} />;
}*/
function Dice({color,num}) {//function Dice({color='blue',num=1}) {
  const src = DICE_MAGES[color][num-1];
  const alt = `${color} ${num}`;
  return <img src={src} alt={alt} />;
}

export default Dice;
