import _ from 'lodash';

export const selectAllPokemon = (state) => _.values(state.pokemon);

export const selectPokemonItem = (state, itemId) => {
  let items = state.pokemonDetail.items;
  let foundItem = items.filter(item => {
    return item.id == itemId;
  });
  return foundItem[0] || { happiness: ""};
};
