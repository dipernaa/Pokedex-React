import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import PokemonDetail from '../PokemonDetail';

const testProps = {
  pokemon: {
    id: '1',
    name: 'pokedude',
    base_experience: 123,
    height: 21,
    weight: 12,
    sprites: {
      front_default: 'http://www.some.url/pic.png'
    },
    stats: [
      {
        base_stat: 42,
        stat: { name: 'hp' }
      },
      {
        base_stat: 12,
        stat: { name: 'speed' }
      }
    ],
    types: [
      {
        type: { name: 'bug' }
      },
      {
        type: { name: 'poison' }
      }
    ]
  }
};

it('renders null when pokemon is not present', () => {
  const wrapper = shallow(
    <PokemonDetail/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});

it('renders a PokemonDetail when pokemon is present', () => {
  const wrapper = shallow(
    <PokemonDetail {...testProps}/>
  );

  expect(toJson(wrapper)).toMatchSnapshot();
});
