import { APIgetPokemonByName, APIgetPokemonNamesList } from 'api/api';

const SET_POKEMON_LIST = 'SET_POKEMON_LIST';
const CLEAR_POKEMON_LIST = 'CLEAR_POKEMON_LIST';
const IS_FETCHING = 'IS_FETCHING';
const SET_TYPEFILTER1 = 'SET_TYPEFILTER1';
const SET_TYPEFILTER2 = 'SET_TYPEFILTER2';
const CLEAR_SEARCHFILTER_LIST = 'CLEAR_SEARCHFILTER_LIST';

let initialState = {
  pokemon: [],
  pokemonList: [],
  isFetching: false,
  typeFilter1: 'all',
  typeFilter2: 'all',
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
    case SET_TYPEFILTER1:
      return {
        ...state,
        typeFilter1: action.typeFilter1,
      };
    case SET_TYPEFILTER2:
      return {
        ...state,
        typeFilter2: action.typeFilter2,
      };
    case CLEAR_SEARCHFILTER_LIST:
      return {
        ...state,
        typeFilter1: null,
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
export const setTypeFilter1 = (typeFilter1) => ({
  type: SET_TYPEFILTER1,
  typeFilter1,
});
export const setTypeFilter2 = (typeFilter2) => ({
  type: SET_TYPEFILTER2,
  typeFilter2,
});
export const clearSearchFilter = () => ({
  type: CLEAR_SEARCHFILTER_LIST,
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
    dispatch(clearSearchFilter());
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
