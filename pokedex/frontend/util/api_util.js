export const fetchAllPokemon = () => {
  return $.ajax({
    method: 'get',
    url: 'api/pokemon'
  });
};

export const fetchSinglePokemon = (pokemon) => {
  return $.ajax({
    method: 'get',
    url: `api/pokemon/${pokemon}`
  });
};

export const createSinglePokemon = (pokemon) => {
  return $.ajax({
    method: 'post',
    url: 'api/pokemon',
    data: {pokemon}
  });
};
