import React from 'react';
import ItemDetailContainer from './item_detail_container';
import { Route, Link } from 'react-router-dom';

class PokemonDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    this.props.requestSinglePokemon(this.props.match.params.pokemonId);
  }

  componentWillReceiveProps(newProps){
    if ( newProps.match.params.pokemonId != this.props.poke.id ) {
    this.props.requestSinglePokemon(newProps.match.params.pokemonId);
    }
  }

  render() {
    let items = this.props.poke.items.map((item, idx) => {
      return (
      <Link to={`/pokemon/${item.pokemon_id}/item/${item.id}`}>
        <li key={idx}>{item.name}
          <br />
          <img width="50px" src={item.image_url} alt="Pokemon"/>
        </li>
      </Link>
    );
    });


    return (
      <div className="pokemon_detail">
        <img src={this.props.poke.image_url} alt="Pokemon" />
        <ul>
          <li>Name: {this.props.poke.name}</li>
          <li>Attack: {this.props.poke.attack}</li>
          <li>Defense: {this.props.poke.defense}</li>
          <li>Type: {this.props.poke.poke_type}</li>
          <li>Moves: {this.props.poke.moves}</li>
          <ul>Items : {items}</ul>
        </ul>
        <Route path="/pokemon/:pokemonId/item/:itemId" component={ItemDetailContainer} />
      </div>
    );
  }
}

export default PokemonDetail;
