import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const APIgetPokemonNamesList = (from, to) => {
  return instance
    .get(`pokemon?limit=${to - from}&offset=${from}`)
    .then((response) => {
      return response.data.results;
    });
};

export const APIgetPokemonByName = (pokemon) => {
  return instance.get(`pokemon/${pokemon}`).then((response) => {
    return instance.get(`pokemon-species/${pokemon}`).then((response2) => {
      return {
        ...response.data,
        ...response2.data,
      };
    });
  });
};

export const APIgetPokemonSpecies = (pokemon) => {
  return instance.get(`pokemon-species/${pokemon}`).then((response) => {
    return response.data;
  });
};

export const APIgetEvolutionChain = (pokemon) => {
  return instance.get(`evolution-chain/${pokemon}`).then((response) => {
    return response.data;
  });
};
