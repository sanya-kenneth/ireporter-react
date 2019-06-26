import signupReducer from '../../redux/reducers/signupReducer';
import { signupTypes } from '../../redux/actions/types';

const state = {
  signupErrors: {},
  signupResponse: {},
};

const data = {
  username: 'sasasasuuuuu',
  email: 'sanyakensasasawqwqwneth@gmail.com',
  message: 'Account was created.',
};

describe('signup reducer test', () => {
  it('it tests the reducer is called', () => {
    const newstate = signupReducer(state, {});
    expect(newstate).toEqual(state);
  });
});
describe('signup reducer success test', () => {
  let newState;
  it('should return a signup_response object', () => {
    newState = signupReducer(state,
      {
        type: signupTypes.SIGNUP_SUCCESS,
        payload: data,
      });
    expect(newState).toEqual({
      ...state, signupResponse: data,
    });
  });
});
describe('signup reducer failure test', () => {
  let newState;
  it('should return a signup_error object', () => {
    newState = signupReducer(state,
      {
        type: signupTypes.SIGNUP_ERROR,
        payload: {},
      });
    expect(newState).toEqual({
      ...state,
      signupErrors: {},

    });
  });
});
