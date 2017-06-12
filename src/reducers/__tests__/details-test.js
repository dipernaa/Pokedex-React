import details, { initialState } from '../details';
import { GET_POKEMON_DETAILS } from '../../constants/actionTypes';

it('handles unexpected action', () => {
  expect(details(initialState, { type: '_NULL' }))
    .toMatchSnapshot();
});

it('handles GET_POKEMON_DETAILS_REQUEST action', () => {
  expect(details(initialState, { type: GET_POKEMON_DETAILS.request }))
    .toMatchSnapshot();
});

it('handles GET_POKEMON_DETAILS_SUCCESS action', () => {
  const pokemonDetails = {
    name: 'pokedude',
    id: 34
  };

  expect(details(initialState, { type: GET_POKEMON_DETAILS.success, data: pokemonDetails }))
    .toMatchSnapshot();
});

it('handles GET_POKEMON_DETAILS_FAILURE action', () => {
  expect(details(initialState, { type: GET_POKEMON_DETAILS.failure }))
    .toMatchSnapshot();
});
