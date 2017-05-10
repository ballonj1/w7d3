import _ from 'lodash';

export const selectAllPokemon = (state) => _.values(state.pokemon);
    
