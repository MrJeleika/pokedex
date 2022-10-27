import { connect } from 'react-redux';
import {
  setPokemonListThunk,
  searchPokemonByNameThunk,
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
};

export const SortContainer = connect(mapStateToProps, mapDispatchToProps)(Sort);
