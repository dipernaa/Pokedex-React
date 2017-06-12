import React from 'react';
import { shallow } from 'enzyme';
import { browserHistory } from 'react-router';
import toJson from 'enzyme-to-json';
import PokedexList from '../PokedexList';

jest.mock('react-router', () => ({
  browserHistory: {
    push: jest.fn()
  }
}));

const testProps = {
  pokedex: [
    {
      name: 'pokedude',
      url: 'http://www.some.url'
    },
    {
      name: 'pokeman',
      url: 'http://www.worm.url'
    },
    {
      name: 'pokelizard',
      url: 'http://www.squad.url'
    }
  ]
};

it('renders null when pokemon is not present', () => {
  const wrapper = shallow(
    <PokedexList/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders a PokedexList when pokemon is present', () => {
  const wrapper = shallow(
    <PokedexList {...testProps}/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('resets pokedex when search field changes without a value', () => {
  const wrapper = shallow(
    <PokedexList {...testProps}/>
  );

  const searchField = wrapper.find('TextField');
  searchField.props().onChange({}, '');

  const filteredPokemon = wrapper.state('filteredPokedex');
  expect(filteredPokemon.length).toEqual(testProps.pokedex.length);
});

it('filters pokedex when search field changes with value', () => {
  const wrapper = shallow(
    <PokedexList {...testProps}/>
  );

  const searchField = wrapper.find('TextField');
  searchField.props().onChange({}, 'dude');

  const filteredPokemon = wrapper.state('filteredPokedex');
  expect(filteredPokemon.length).toEqual(1);
  expect(filteredPokemon[0].name).toEqual(testProps.pokedex[0].name);
  expect(filteredPokemon[0].url).toEqual(testProps.pokedex[0].url);
});

it('calls browserHistory.push() when list item is press', () => {
  const wrapper = shallow(
    <PokedexList {...testProps}/>
  );

  const listItem = wrapper.find('ListItem').first();
  listItem.props().onClick();

  expect(browserHistory.push.mock.calls.length).toBe(1);
});
