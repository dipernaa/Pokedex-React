import React from 'react';
import { shallow } from 'enzyme';
import { browserHistory } from 'react-router';
import toJson from 'enzyme-to-json';
import mockStore from 'redux-mock-store';
import AppBar from '../AppBar';

jest.mock('react-router', () => ({
  browserHistory: {
    goBack: jest.fn()
  }
}));

const TEST_PROPS = {
  title: 'Super Title',
  showGlobalActions: jest.fn()
};

const mockReduxStore = mockStore({});

beforeEach(() => {
  browserHistory.goBack.mockClear();
  mockReduxStore.clearActions();
});

it('renders an AppBar', () => {
  const wrapper = shallow(
    <AppBar {...TEST_PROPS}/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders an AppBar with a back arrow', () => {
  const props = {
    ...TEST_PROPS,
    showBackArrow: true
  };
  const wrapper = shallow(
    <AppBar {...props}/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('calls browserHistory.goBack() when back arrow is pressed', () => {
  const props = {
    ...TEST_PROPS,
    showBackArrow: true
  };
  const wrapper = shallow(
    <AppBar {...props}/>
  );

  const appBarProps = wrapper.find('AppBar').props();
  appBarProps.onLeftIconButtonTouchTap();

  expect(browserHistory.goBack.mock.calls.length).toBe(1);
});
