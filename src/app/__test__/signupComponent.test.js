import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignupComponent from '../components/signupComponent';

describe('<SignupComponent/>', () => {
  let wrapper;
  const PropsTest = {
    signupResponse: {},
    signupErrors: {},
    handleChange: jest.fn(),
    handleSignup: jest.fn(),
    isLoading: false,
  };
  it('renders signup page', () => {
    wrapper = shallow(<SignupComponent {...PropsTest} />);
  });
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
