import mockStore from 'redux-mock-store';
import pokedexActions from '../pokedex';

jest.mock('../utils/asyncUtils', () => ({
  buildActionNames: (baseName) => ({
    failure: `${baseName}_FAILURE`,
    request: `${baseName}_REQUEST`,
    success: `${baseName}_SUCCESS`
  }),
  createAsyncAction: (actionNames, asyncFn) => (
    asyncFn(mockReduxStore.getState())
      .then(result => ({
        actionNames,
        result
      }))
  )
}));

jest.mock('../utils/api', () => ({
  getAsync: (endpoint) => Promise.resolve({
    endpoint
  })
}));

const mockReduxStore = mockStore();

beforeEach(() => {
  mockReduxStore.clearActions();
});

it('creates a get pokemon details action', () =>
  pokedexActions.getPokemon()
    .then(result => {
      expect(result).toMatchSnapshot();
    })
);
