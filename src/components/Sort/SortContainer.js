import { connect } from 'react-redux';
import {
  setPokemonListThunk,
  searchPokemonByNameThunk,
  setTypeFilter1,
  setTypeFilter2,
  setWeightFilter,
  setHeightFilter,
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
  setWeightFilter,
  setHeightFilter,
};

export const SortContainer = connect(mapStateToProps, mapDispatchToProps)(Sort);
