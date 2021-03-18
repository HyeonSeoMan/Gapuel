import * as actions from '../store/actions';
import {connect} from 'react-redux';
import SendBody from '../components/SendBody';

const mapStateToProps = (state) => ({
  SendDebt: state.SendDebt,
});

const mapDispatchToProps = (dispatch) => ({
  SendAdd: (payload) => dispatch(actions.SendAdd(payload)),
  SendRemove: () => dispatch(actions.SendRemove()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SendBody);
