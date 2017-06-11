import api from './utils/api';
import { createAsyncAction } from './utils/asyncUtils';
import { GET_POKEMON_DETAILS } from '../constants/actionTypes';

function getPokemonDetails(url) {
  return createAsyncAction(GET_POKEMON_DETAILS, () => api.getAsync(`/api/details?url=${url}`));
}

export default {
  getPokemonDetails
};
