import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://pokeapi.co/api/v2/',
});

export const APIgetPokemonNamesList = () => {
  return instance.get('pokemon?limit=50&offset=0').then((response) => {
    return response.data.results;
  });
};

export const APIgetPokemonList = (pokemon) => {
  return instance.get(`pokemon/${pokemon}`).then((response) => {
    return response.data;
  });
};
