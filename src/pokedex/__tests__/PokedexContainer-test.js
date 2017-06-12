import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import mockStore from 'redux-mock-store';
import { PokedexContainer, mapStateToProps, mapDispatchToProps } from '../PokedexContainer';
import { initialState } from '../../reducers/pokedex';

const mockReduxStore = mockStore({});
const TEST_PROPS = {
  getPokemon: jest.fn()
};

beforeEach(() => {
  mockReduxStore.clearActions();
});

it('renders a PokedexList when not loading', () => {
  const props = {
    ...TEST_PROPS,
    isLoading: false
  };

  const wrapper = shallow(
    <PokedexContainer {...props}/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders a Loading bar when loading', () => {
  const props = {
    ...TEST_PROPS,
    isLoading: true
  };

  const wrapper = shallow(
    <PokedexContainer {...props}/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('correctly maps state to props', () => {
  const state = {
    pokedex: initialState
  };

  const props = mapStateToProps(state);
  expect(props).toMatchSnapshot();
});

it('correctly maps dispatch to props', () => {
  const props = mapDispatchToProps(mockReduxStore.dispatch);
  expect(props).toMatchSnapshot();

  const testResponse = { leap: 'rules' };

  fetch.mockResponseSuccess(testResponse);
  return props.getPokemon()
    .then(() => {
      expect(mockReduxStore.getActions()).toMatchSnapshot();
    });
});
