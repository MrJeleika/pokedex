import { connect } from 'react-redux';
import {
  setPokemonListThunk,
  searchPokemonByNameThunk,
  setTypeFilter1,
  setTypeFilter2,
} from '../../redux/pokeReducer';
import { Sort } from './Sort';
const mapStateToProps = (state) => {
  return {
    state: state.state,
  };
};
const mapDispatchToProps = {
  setPokemonListThunk,
  searchPokemonByNameThunk,
  setTypeFilter1,
  setTypeFilter2,
};

export const SortContainer = connect(mapStateToProps, mapDispatchToProps)(Sort);
