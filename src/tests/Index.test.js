import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import TestRenderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from '../App';
import store from '../redux/store';

it('renders without crashing', () => {
  const tree = TestRenderer.create(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
  ).toJSON();

  expect(tree).toMatchSnapshot();
});
