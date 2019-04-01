import {
  connect,
} from 'react-redux';
import App from './components';
import * as all from './actions';
import {
  TITLE,
} from './consts';

const mapStateToProps = state => ({
  ...state[`${TITLE}Reducer`],
});

const mapDispatchToProps = (dispatch) => {
  const obj = {};
  const keys = Object.keys(all);
  keys.forEach((item) => {
    obj[item] = payload => dispatch(all[item](payload));
  });
  return obj;
};
const ConnectApp = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default ConnectApp;
