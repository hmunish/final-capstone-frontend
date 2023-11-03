import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import DeleteCar from '../components/car/DeleteCar';
import store from '../redux/store';

test('Car Details components Match', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <DeleteCar />
      </Provider>
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
