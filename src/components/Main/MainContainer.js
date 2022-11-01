import { connect } from 'react-redux';
import {} from '../../redux/pokeReducer';
import { Main } from './Main';
const mapStateToProps = (state) => {
  return {
    state: state.state,
  };
};
const mapDispatchToProps = {};

export const MainContainer = connect(mapStateToProps, mapDispatchToProps)(Main);
