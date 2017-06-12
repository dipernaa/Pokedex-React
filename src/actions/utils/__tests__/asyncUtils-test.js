import mockStore from 'redux-mock-store';
import { buildActionNames, buildActions, createAsyncAction } from '../asyncUtils';

const mockReduxStore = mockStore();

beforeEach(() => {
  mockReduxStore.clearActions();
});

it('builds action names from a base name', () => {
  expect(buildActionNames('TEST_BASE'))
    .toMatchSnapshot();
});

it('builds success, request, and failure functions', () => {
  const actionNames = buildActionNames('TEST_BASE');
  const actions = buildActions(actionNames);

  expect(actions).toMatchSnapshot();
  expect(actions.request()).toMatchSnapshot();
  expect(actions.success({ value: 'data 1' })).toMatchSnapshot();
  expect(actions.failure({ error: 'error 1' })).toMatchSnapshot();
});

it('dispatches the correct actions for a failed async action', () => {
  const actionNames = buildActionNames('TEST_BASE');
  const asyncFn = () => Promise.reject({ error: 'error 2' });

  return mockReduxStore.dispatch(createAsyncAction(actionNames, asyncFn))
    .then(() => {
      expect(mockReduxStore.getActions()).toMatchSnapshot();
    });
});

it('dispatches the correct actions for a successful async action', () => {
  const actionNames = buildActionNames('TEST_BASE');
  const asyncFn = () => Promise.resolve({ data: 'data 1' });

  return mockReduxStore.dispatch(createAsyncAction(actionNames, asyncFn))
    .then(() => {
      expect(mockReduxStore.getActions()).toMatchSnapshot();
    });
});
