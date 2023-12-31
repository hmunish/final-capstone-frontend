import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import CarDetail from '../components/car/CarDetail';
import store from '../redux/store';

test('Car Details components Match', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <CarDetail />
      </Provider>
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
