import api from './utils/api';
import { createAsyncAction } from './utils/asyncUtils';

import {
  GET_POKEMON,
  GET_POKEMON_DETAILS
} from '../constants/actionTypes';

function getPokemon() {
  return createAsyncAction(GET_POKEMON, () => api.getAsync('/pokedex'));
}

function getPokemonDetails(url) {
  console.log('here');
  return createAsyncAction(GET_POKEMON_DETAILS, () => api.getAsync(`/pokedex/details?url=${url}`));
}

export default {
  getPokemon,
  getPokemonDetails
};
