import { RECEIVE_SINGLE_POKEMON, SPAWN_SINGLE_POKEMON } from '../actions/pokemon_actions';
import { merge } from 'lodash/merge';

const _initialState = {
  name: "",
  attack: "",
  defense: "",
  image_url: "",
  moves: [],
  poke_type: "",
  items: []
};

const pokemonDetailReducer = (state = _initialState, action) => {
  switch(action.type){
    case RECEIVE_SINGLE_POKEMON:
      return action.pokemon;
    case SPAWN_SINGLE_POKEMON:
      let newState = merge({}, state);
      newState[action.pokemon.id] = action.pokemon;
      return newState;
    default:
      return state;
  }
};

export default pokemonDetailReducer;
