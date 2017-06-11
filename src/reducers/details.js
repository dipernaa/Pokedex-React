import { GET_POKEMON_DETAILS } from '../constants/actionTypes';

export const initialState = {
  results: null,
  isLoading: false
};

export default function(state = initialState, action) {
  console.log(state);
  console.log(action);
  switch (action.type) {
    case GET_POKEMON_DETAILS.request:
      return {
        ...state,
        isLoading: true
      };

    case GET_POKEMON_DETAILS.failure:
      return {
        ...state,
        isLoading: false
      };

    case GET_POKEMON_DETAILS.success:
      return {
        ...state,
        results: action.data,
        isLoading: false
      };

    default:
      return state;
  }
}
