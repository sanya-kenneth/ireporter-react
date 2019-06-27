import moxios from 'moxios';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { signupAction } from '../../redux/actions/signupAction';
import { signupTypes } from '../../redux/actions/types';

const middlewares = [thunk];

const mockStore = configureStore(middlewares);

describe('signupAction', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should signup successfully', () => {
    const data = {
      username: 'sasasasuuuuu',
      email: 'sanyakensasasawqwqwneth@gmail.com',
      message: 'Check your email address to confirm registration.',
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 201,
        response: data,
      });
    });
    const actionExpected = [
      {
        type: signupTypes.SIGNUP_SUCCESS,
        payload: data,
      },
    ];
    const userData = {
      user: {
        email: 'kenneth.sanya@andela.com',
        password: 'Test@1234',
        username: 'sanyatest',
      },
    };
    const store = mockStore({});
    return store
      .dispatch(signupAction(userData))
      .then(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
  it('should return errors on failure to signup', () => {
    const error = {
      username: [],
      email: [],
      message: [],
    };
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 400,
        response: error,
      });
    });
    const actionExpected = [
      {
        type: signupTypes.SIGNUP_ERROR,
        payload: error,
      },
    ];
    const userData = {
      user: {
        email: 'kenneth@gmail.com',
        password: 'Test1234',
        username: 'user',
      },
    };
    const store = mockStore({});
    return store
      .dispatch(signupAction(userData))
      .catch(() => {
        expect(store.getActions()).toEqual(actionExpected);
      });
  });
});
