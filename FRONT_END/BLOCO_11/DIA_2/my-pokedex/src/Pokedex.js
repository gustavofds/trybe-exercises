import React from 'react';
import data from './data.js'
import Pokemon from './Pokemon.js';
import './Pokedex.css';

class Pokedex extends React.Component {
  render() {
    return (
      <ul>
        {data.map((pokemon) => Pokemon(pokemon))}
      </ul>
    )
  }
}

export default Pokedex;