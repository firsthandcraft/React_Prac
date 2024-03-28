import rockImg from '../assets/rock.svg';
import scissorImg from '../assets/scissor.svg';
import paperImg from '../assets/paper.svg';

const DICE_IMAGES = {
  rock :rockImg,
  scissor: scissorImg,
  paper : paperImg,
}

function HandIcon(props){
  const src = DICE_IMAGES[props.value];
  const alt = DICE_IMAGES[props];
  return <img src={src} alt={alt}/>;
}
export default HandIcon;
