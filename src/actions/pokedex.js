import api from './utils/api';
import { createAsyncAction } from './utils/asyncUtils';
import { GET_POKEMON } from '../constants/actionTypes';

function getPokemon() {
  return createAsyncAction(GET_POKEMON, () => api.getAsync('/api/pokedex'));
}

export default {
  getPokemon
};
