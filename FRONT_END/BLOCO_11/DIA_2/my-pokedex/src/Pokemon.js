import './Pokemon.css';

function Pokemon(props) {
  return (
    <li>
      <span>{props.name}</span>
      <span>{props.type}</span>
      <span>{props.averageWeight.value} {props.averageWeight.measurementUnit}</span> 
      <img src={props.image} alt="Pokemon image"></img>
    </li>
  )
}

export default Pokemon;