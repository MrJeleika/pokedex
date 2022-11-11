import { connect } from 'react-redux';
import { setEvolutionChainThunk } from '../../redux/pokeReducer';
import { Main } from './Main';
const mapStateToProps = (state) => {
  return {
    state: state.state,
  };
};
const mapDispatchToProps = { setEvolutionChainThunk };

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
