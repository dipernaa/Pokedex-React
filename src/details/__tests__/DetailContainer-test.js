import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import mockStore from 'redux-mock-store';
import { DetailContainer, mapStateToProps, mapDispatchToProps } from '../DetailContainer';
import { initialState } from '../../reducers/details';

const mockReduxStore = mockStore({});
const TEST_PROPS = {
  getPokemonDetail: jest.fn(),
  location: {
    query: {
      some: 'value'
    }
  }
};

beforeEach(() => {
  mockReduxStore.clearActions();
});

it('renders a PokemonDetail when not loading', () => {
  const props = {
    ...TEST_PROPS,
    isLoading: false
  };

  const wrapper = shallow(
    <DetailContainer {...props}/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders a Loading bar when loading', () => {
  const props = {
    ...TEST_PROPS,
    isLoading: true
  };

  const wrapper = shallow(
    <DetailContainer {...props}/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('correctly maps state to props', () => {
  const state = {
    details: initialState
  };

  const props = mapStateToProps(state);
  expect(props).toMatchSnapshot();
});

it('correctly maps dispatch to props', () => {
  const props = mapDispatchToProps(mockReduxStore.dispatch);
  expect(props).toMatchSnapshot();

  const testResponse = { leap: 'rules' };

  fetch.mockResponseSuccess(testResponse);
  return props.getPokemonDetail('http://www.some.url')
    .then(() => {
      expect(mockReduxStore.getActions()).toMatchSnapshot();
    });
});
