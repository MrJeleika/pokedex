import { connect } from 'react-redux';
import { setPokemonListThunk } from '../../redux/pokeReducer';
import { Main } from './Main';
const mapStateToProps = (state) => {
  return {
    state: state.state,
  };
};
const mapDispatchToProps = {
  setPokemonListThunk,
};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
