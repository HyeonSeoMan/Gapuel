import * as actions from '../store/actions';
import {connect} from 'react-redux';
import HomeHeader from '../components/HomeHeader';

const mapStateToProps = (state, props) => ({
  debt:
    props.navigation.getParam('moneyParam') === 'Receive'
      ? state.ReceiveDebt
      : state.SendDebt,
  navigation: props.navigation,
});
const mapDispatchToProps = (dispatch, props) => ({
  // remove: (idx) =>
  //   dispatch(
  //     props.navigation.getParam('moneyParam') === 'Receive'
  //       ? actions.ReceiveRemove(idx)
  //       : actions.SendRemove(idx),
  //   ),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
