import * as actions from '../store/actions';
import {connect} from 'react-redux';
import DetailWrap from '../components/DetailWrap';

const mapStateToProps = (state, props) => ({
  Debt:
    props.navigation.getParam('moneyParam') === 'Receive'
      ? state.ReceiveDebt.find((e) => e.phone === props.phone)
      : state.SendDebt.find((e) => e.phone === props.phone),
  navigation: props.navigation,
});

const mapDispatchToProps = (dispatch, props) => ({
  remove: (phone) =>
    dispatch(
      props.navigation.getParam('moneyParam') === 'Receive'
        ? actions.ReceiveRemove(phone)
        : actions.SendRemove(phone),
    ),
  addHistory: (payload) =>
    dispatch(
      props.navigation.getParam('moneyParam') === 'Receive'
        ? actions.ReceiveAddHistory(payload)
        : actions.SendAddHistory(payload),
    ),
  removeHistory: (payload) =>
    dispatch(
      props.navigation.getParam('moneyParam') === 'Receive'
        ? actions.ReceiveRemoveHistory(payload)
        : actions.SendRemoveHistory(payload),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailWrap);
