import * as actions from '../store/actions';
import {connect} from 'react-redux';
import ContactsList from '../components/ContactsList';

const mapStateToProps = (state, props) => ({
  debt:
    props.navigation.getParam('moneyParam') === 'Receive'
      ? state.ReceiveDebt
      : state.SendDebt,
  navigation: props.navigation,
  contacts: props.contacts,
});
const mapDispatchToProps = (dispatch, props) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
