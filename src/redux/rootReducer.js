import { combineReducers } from 'redux';
import signupReducer from './reducers/signupReducer';
import loginReducer from './reducers/loginReducer';

export default combineReducers({
  signup: signupReducer,
  login: loginReducer,
});
