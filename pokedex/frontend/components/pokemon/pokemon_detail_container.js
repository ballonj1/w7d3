import { connect } from 'react-redux';
import { requestSinglePokemon } from '../../actions/pokemon_actions';
import PokemonDetail from './pokemon_detail';

const mapStatetoProps = (state) => ({
  poke: state.pokemonDetail
});

const mapDispatchToProps = dispatch => ({
  requestSinglePokemon: (poke) => dispatch(requestSinglePokemon(poke))
});

export default connect(
  mapStatetoProps,
  mapDispatchToProps
  )(PokemonDetail);
