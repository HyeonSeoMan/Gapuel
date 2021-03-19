import * as actions from '../store/actions';
import {connect} from 'react-redux';
import DetailWrap from '../components/DetailWrap';

const mapStateToProps = (state, props) => ({
  Debt:
    props.navigation.getParam('moneyParam') === 'Receive'
      ? state.ReceiveDebt.find((e) => e.id == props.debtId)
      : state.SendDebt.find((e) => e.id == props.debtId),
  navigation: props.navigation,
});

const mapDispatchToProps = (dispatch, props) => ({
  remove: (id) =>
    dispatch(
      props.navigation.getParam('moneyParam') === 'Receive'
        ? actions.ReceiveRemove(id)
        : actions.SendRemove(id),
    ),
  addHistory: (payload) =>
    dispatch(
      props.navigation.getParam('moneyParam') === 'Receive'
        ? actions.ReceiveAddHistory(payload)
        : actions.SendAddHistory(payload),
    ),
});

export default connect(mapStateToProps, mapDispatchToProps)(DetailWrap);
