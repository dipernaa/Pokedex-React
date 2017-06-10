import {
  GET_POKEMON,
  GET_POKEMON_DETAILS
} from '../constants/actionTypes';

export const initialState = {
  count: 0,
  next: null,
  previous: null,
  results: [],
  isLoading: false
};

export default function(state = initialState, action) {
  // console.log(state);
  // console.log(action);
  switch (action.type) {
    case GET_POKEMON.request:
    case GET_POKEMON_DETAILS.request:
      return {
        ...state,
        isLoading: false
      };

    case GET_POKEMON.failure:
    case GET_POKEMON_DETAILS.failure:
      return {
        ...state,
        isLoading: false
      };

    case GET_POKEMON.success:
      return {
        ...state,
        count: action.data.count,
        next: action.data.next,
        previous: action.data.previous,
        results: action.data.results.map((item, index) => ({
          ...item,
          id: index
        })),
        isLoading: false
      };

    case GET_POKEMON_DETAILS.success:
      return {
        ...state,
        results: state.results.map((item, index) => {
          if (item.id === index) {
            return {
              ...item,
              details: action.data
            };
          }

          return {
            ...item
          };
        }),
        isLoading: false
      };

    default:
      return state;
  }
}
