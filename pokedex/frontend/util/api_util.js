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
