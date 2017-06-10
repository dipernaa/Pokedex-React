const getAsync = (endpoint) =>
  fetch(endpoint)
    .then(handleResponse);

const handleResponse = (response) =>
  response.json().then(json => {
    if (response.ok) {
      return json;
    }

    return Promise.reject({
      statusCode: response.status,
      ...json
    });
  });

export default {
  getAsync
};
