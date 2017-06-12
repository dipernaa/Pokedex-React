import api from '../api';

const SUCCESS_RESPONSE = {
  value: 'good'
};

const FAILURE_RESPONSE = {
  value: 'bad'
};

it('sends a GET request', () => {
  fetch.mockResponseSuccess(SUCCESS_RESPONSE);

  return api.getAsync('/endpoint').then((response) => {
    expect(response.value).toEqual(SUCCESS_RESPONSE.value);
  });
});

it('sends a bad GET request', () => {
  fetch.mockResponseFailure(FAILURE_RESPONSE);

  return api.getAsync('/endpoint').catch((response) => {
    expect(response.value).toEqual(FAILURE_RESPONSE.value);
  });
});
