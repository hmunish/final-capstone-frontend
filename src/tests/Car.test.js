import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import Car from '../components/car/Car';

test('Car Component matches snapshots', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Car />
    </BrowserRouter>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
