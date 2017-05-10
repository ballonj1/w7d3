import React from 'react';

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
    const pokemonLi = this.props.pokemon.map((pokemon,idx) => (
      <li key={idx}>{pokemon.name}
      <br />
      <img width="50px" src={pokemon.image_url} alt="Pokemon"/>
      </li>
    ));

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
