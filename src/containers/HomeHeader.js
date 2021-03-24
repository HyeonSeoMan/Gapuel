import * as actions from '../store/actions';
import {connect} from 'react-redux';
import HomeHeader from '../components/HomeHeader';

const mapStateToProps = (state, props) => ({
  names: {
    receive: state.ReceiveDebt.map((item) => item.title),
    send: state.SendDebt.map((item) => item.title),
  },
  debt:
    props.navigation.getParam('moneyParam') === 'Receive'
      ? state.ReceiveDebt
      : state.SendDebt,
  navigation: props.navigation,
});
const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
