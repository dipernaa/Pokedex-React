import { GET_POKEMON } from '../constants/actionTypes';

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
  switch (action.type) {
    case GET_POKEMON.request:
      return {
        ...state,
        isLoading: true
      };

    case GET_POKEMON.failure:
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

    default:
      return state;
  }
}
