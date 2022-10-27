import { APIgetPokemonList, APIgetPokemonNamesList } from 'api/api';

const SET_POKEMON_LIST = 'SET_POKEMON_LIST';

let initialState = {
  pokemon: [],
  pokemonList: [],
};

export const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: [...state.pokemonList, action.pokemonList],
      };
    default:
      return {
        ...state,
      };
  }
};

export const setPokemonList = (pokemonList) => ({
  type: SET_POKEMON_LIST,
  pokemonList,
});

export const setPokemonListThunk = () => {
  return async (dispatch) => {
    let response = await APIgetPokemonNamesList();
    response.map(async (e) => {
      dispatch(setPokemonList(await APIgetPokemonList(e.name)));
    });
  };
};
