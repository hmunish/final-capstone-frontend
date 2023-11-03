import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import NavMenu from '../components/nav/NavMenu'
import store from '../redux/store';

test('Car Details components Match', () => {
  const tree = renderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <NavMenu />
      </Provider>
    </BrowserRouter>,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});