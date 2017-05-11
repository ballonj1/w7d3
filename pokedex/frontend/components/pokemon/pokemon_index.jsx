import React from 'react';
import { PokemonIndexItem } from './pokemon_index_item';

class PokemonIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props);
    this.props.requestAllPokemon().then(() =>{
    console.log(this.props.pokemon);
  });
  }

  render(){
    const pokemonLi = this.props.pokemon.map(pokemon => {
      return <PokemonIndexItem key={pokemon.id} pokemon={pokemon} />;
    });

    return(
      <div>
        <ul>
          { pokemonLi }
        </ul>
      </div>
    );
  }
}

export default PokemonIndex;
