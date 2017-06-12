import pokedex, { initialState } from '../pokedex';
import { GET_POKEMON } from '../../constants/actionTypes';

it('handles unexpected action', () => {
  expect(pokedex(initialState, { type: '_NULL' }))
    .toMatchSnapshot();
});

it('handles GET_POKEMON_REQUEST action', () => {
  expect(pokedex(initialState, { type: GET_POKEMON.request }))
    .toMatchSnapshot();
});

it('handles GET_POKEMON_SUCCESS action', () => {
  const pokemonList = {
    count: 3,
    next: 'http://www.some.url',
    previous: 'http://www.other.url',
    results: [
      { name: 'pokedude' },
      { name: 'ultraPoke' },
      { name: 'slappyPoke' }
    ]
  };

  expect(pokedex(initialState, { type: GET_POKEMON.success, data: pokemonList }))
    .toMatchSnapshot();
});

it('handles GET_POKEMON_FAILURE action', () => {
  expect(pokedex(initialState, { type: GET_POKEMON.failure }))
    .toMatchSnapshot();
});
