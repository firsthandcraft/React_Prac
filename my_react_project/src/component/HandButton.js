
import rockImg from '../assets/rock.svg';
import scissorImg from '../assets/scissor.svg';
import paperImg from '../assets/paper.svg';
const DICE_IMAGES = {
  rock :rockImg,
  scissor: scissorImg,
  paper : paperImg,
}
function HandButton({ value, onClick }) {
  const handleClick = () => onClick(value);
  const src = DICE_IMAGES[value];
  const alt = DICE_IMAGES[value];
  return <button className='HandButton'  onClick={handleClick}>
     <img src={src} alt={alt}/>
  </button>;
}
export default HandButton;
