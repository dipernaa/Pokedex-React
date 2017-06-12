import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AppContainer from '../AppContainer';

const TEST_PROPS = {
  routes: [{
    title: 'test'
  }]
};

it('renders an AppContainer', () => {
  const wrapper = shallow(
    <AppContainer {...TEST_PROPS}>
      <div>HI</div>
    </AppContainer>
  );

  expect(toJson(wrapper.find('.app'))).toMatchSnapshot();
});
