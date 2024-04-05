
import HandIcon from './HandIcon';

function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  return <button className='DiceBtn' onClick={handleClick}><HandIcon value={value} /></button>;
}
export default HandButton;
