import configureStore from '../configureStore';

it('should setup middleware and call onComplete', (done) => {
  const store = configureStore(() => {
    done();
  });

  expect(store).toMatchSnapshot();
});
