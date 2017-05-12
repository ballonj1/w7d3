import { connect } from 'react-redux';
import { makeSinglePokemon } from '../../actions/pokemon_actions';
import PokemonForm from './pokemon_form';

const mapDispatchToProps = dispatch => ({
  makeSinglePokemon: (pokemon) => dispatch(makeSinglePokemon(pokemon))
});

export default connect(
  null,
  mapDispatchToProps
)(PokemonForm);
