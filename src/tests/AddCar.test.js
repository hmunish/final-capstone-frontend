import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddCar from '../components/car/AddCar';
import store from '../redux/store';

test('Car Component matches snapshots', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <AddCar />
      </Provider>
    </BrowserRouter>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
