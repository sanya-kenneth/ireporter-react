import { signupTypes } from '../actions/types';

const initialState = {
  signupErrors: {},
  signupResponse: {
  },
};

export default (state = initialState, action) => {
  const actionType = action.type;
  switch (actionType) {
    case signupTypes.SIGNUP_SUCCESS:
      return {
        ...state,
        signupErrors: {},
        signupResponse: action.payload,
      };
    case signupTypes.SIGNUP_ERROR:
      return {
        ...state,
        signupResponse: {},
        signupErrors: action.payload,
      };
    default:
      return state;
  }
};
