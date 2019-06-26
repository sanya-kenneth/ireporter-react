import { loginTypes } from '../actions/types';

const initialState = {
  loginErrors: {},
  loginResponse: {
  },
};

export default (state = initialState, action) => {
  const actionType = action.type;
  switch (actionType) {
    case loginTypes.LOGIN_SUCCESS:
      return {
        ...state,
        loginErrors: {},
        loginResponse: action.payload,
      };
    case loginTypes.LOGIN_ERROR:
      return {
        ...state,
        loginResponse: {},
        loginErrors: action.payload,
      };
    default:
      return state;
  }
};
