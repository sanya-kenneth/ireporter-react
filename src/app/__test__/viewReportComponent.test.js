import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ViewReportComponent from '../components/viewReportComponent';

describe('<ViewReportComponent/>', () => {
  let wrapper;
  const props = {};
  it('renders view reports page', () => {
    wrapper = shallow(<ViewReportComponent {...props} />);
  });
  it('matches snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
