import {
  GET_POKEMON,
  GET_POKEMON_DETAILS
} from '../constants/actionTypes';

const sortPokemon = (arr) => (
  arr.sort((first, second) => {
    if (first.name > second.name) {
      return 1;
    } else if (first.name < second.name) {
      return -1;
    }

    return 0;
  })
);

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
        results: sortPokemon(action.data.results.map((item, index) => ({
          ...item,
          id: index + 1
        }))),
        isLoading: false
      };

    case GET_POKEMON_DETAILS.success:
      return {
        ...state,
        results: sortPokemon(state.results.map(item => {
          if (item.id === action.data.id) {
            return {
              ...item,
              details: action.data
            };
          }

          return {
            ...item
          };
        })),
        isLoading: false
      };

    default:
      return state;
  }
}
