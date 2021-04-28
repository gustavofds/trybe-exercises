import './Pokemon.css';
import PropTypes from 'prop-types';

function Pokemon(props) {
  return (
    <li>
      <span>{props.poke.name}</span>
      <span>{props.poke.type}</span>
      <span>{props.poke.averageWeight.value} {props.poke.averageWeight.measurementUnit}</span> 
      <img src={props.poke.image} alt="Pokemon image"></img>
    </li>
  )
}

Pokemon.propTypes = {
  poke: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      value: PropTypes.number,
      measurementUnit: PropTypes.string,
    }),
    image: PropTypes.string,
  })
}

export default Pokemon;