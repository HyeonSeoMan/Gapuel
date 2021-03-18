import * as actions from '../store/actions';
import {connect} from 'react-redux';
import ReceiveBody from '../components/ReceiveBody';

const mapStateToProps = (state) => ({
  ReceiveDebt: state.ReceiveDebt,
});

const mapDispatchToProps = (dispatch) => ({
  ReceiveAdd: (payload) => dispatch(actions.ReceiveAdd(payload)),
  ReceiveRemove: () => dispatch(actions.ReceiveRemove()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReceiveBody);
