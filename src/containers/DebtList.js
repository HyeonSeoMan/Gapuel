import * as actions from '../store/actions';
import {connect} from 'react-redux';
import DebtList from '../components/DebtList';

const mapStateToProps = (state, props) => ({
  debt:
    props.navigation.getParam('moneyParam') === 'Receive'
      ? state.ReceiveDebt
      : state.SendDebt,
  navigation: props.navigation,
});
const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DebtList);
