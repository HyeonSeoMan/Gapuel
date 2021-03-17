import * as actions from '../store/actions';
import {connect} from 'react-redux';
import App from '../components/App';

const mapStateToProps = (state) => ({
  debt: state.debt,
});

const mapDispatchToProps = (dispatch) => ({
  handleAddCounter: (payload) => dispatch(actions.add(payload)),
  handleRemoveCounter: () => dispatch(actions.remove()),
  handleIncrement: (index) => dispatch(actions.increment(index)),
  handleDecrement: (index) => dispatch(actions.decrement(index)),
});

const CounterListContainer = connect(mapStateToProps, mapDispatchToProps)(App);

export default CounterListContainer;
