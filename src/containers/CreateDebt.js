import * as actions from '../store/actions';
import {connect} from 'react-redux';
import CreateDebt from '../components/CreateDebt';

const mapStateToProps = (state, props) => ({
  info: props.info,
  navigation: props.navigation,
});

const mapDispatchToProps = (dispatch, props) => ({
  add: (payload) =>
    dispatch(
      props.navigation.getParam('moneyParam') === 'Receive'
        ? actions.ReceiveAdd(payload)
        : actions.SendAdd(payload),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateDebt);
