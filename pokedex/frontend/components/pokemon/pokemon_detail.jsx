import React from 'react';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    this.props.requestSinglePokemon(newProps.match.params.pokemonId);
  }

  render() {
    // const items =
    return (
      <div className="pokemon_detail">
        <img src={this.props.poke.image_url} alt="Pokemon" />
        <ul>
          <li>Name: {this.props.poke.name}</li>
          <li>Attack: {this.props.poke.attack}</li>
          <li>Defense: {this.props.poke.defense}</li>
          <li>Type: {this.props.poke.poke_type}</li>
          <li>Moves: {this.props.poke.moves}</li>
        </ul>
      </div>
    );
  }
}

export default PokemonDetail;
