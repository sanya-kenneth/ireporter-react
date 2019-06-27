import React from 'react';
import { shallow } from 'enzyme';
import { SignupContainer, mapStateToProps } from '../containers/signupContainer';

describe('<SignupContainer/>', () => {
  let wrapper;
  const props = {};
  beforeEach(() => {
    wrapper = shallow(<SignupContainer {...props} />);
  });
  it('should render SignupContainer without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should test the handleChange event', () => {
    const event = {
      target: {
        id: 'username',
        value: 'sanya',
      },
    };
    wrapper.instance().handleChange(event);
    expect(wrapper.instance().state.username).toBe('sanya');
  });
  it('should handle signUp event', () => {
    const props = {
      signupAction: jest.fn(),
    };
    const wrapper = shallow(<SignupContainer {...props} />);
    const instance = wrapper.instance();
    instance.handleSignup({ preventDefault: jest.fn() });
    expect(props.signupAction).toHaveBeenCalled();
  });
  it('should map state to props', () => {
    const initialState = {
      signup: {
        signupErrors: {},
        signupResponse: {
        },
      },
    };
    expect(mapStateToProps(initialState)).toEqual({
      signupErrors: {},
      signupResponse: {
      },
    });
  });
});
