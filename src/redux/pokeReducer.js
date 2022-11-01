import { APIgetPokemonByName, APIgetPokemonNamesList } from 'api/api';

const SET_POKEMON_LIST = 'SET_POKEMON_LIST';
const CLEAR_POKEMON_LIST = 'CLEAR_POKEMON_LIST';
const IS_FETCHING = 'IS_FETCHING';

let initialState = {
  pokemon: [],
  pokemonList: [],
  isFetching: false,
};

export const pokeReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_POKEMON_LIST:
      return {
        ...state,
        pokemonList: [...state.pokemonList, ...action.pokemonList],
      };
    case CLEAR_POKEMON_LIST:
      return {
        ...state,
        pokemonList: [],
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
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
export const clearPokemonList = () => ({
  type: CLEAR_POKEMON_LIST,
});
export const setIsFetching = (isFetching) => ({
  type: IS_FETCHING,
  isFetching,
});

export const setPokemonListThunk = (from, to) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(clearPokemonList());
    let response = await APIgetPokemonNamesList(from, to);
    const arr = await Promise.all(
      response.map((e) => {
        return APIgetPokemonByName(e.name);
      }),
    );
    dispatch(setPokemonList(arr));
    dispatch(setIsFetching(false));
  };
};

export const searchPokemonByNameThunk = (name) => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    dispatch(clearPokemonList());
    try {
      let response = await APIgetPokemonByName(name);
      dispatch(setPokemonList([response]));
    } catch (error) {
      // Clear pokemon list on API error
      dispatch(clearPokemonList());
    }
    dispatch(setIsFetching(false));
  };
};
