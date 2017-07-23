import React from 'react';
import { render } from 'react-dom';
import App from './app/app';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers'

const store = createStore(reducer)

try {
  const appContainer = document.getElementById('app');
  render(
    <Provider store={store}>
      <App />
    </ Provider>,
    appContainer
  );
} catch (e) {
  /* eslint-disable no-console */
  console.warn('main.js is unable to find application container.');
  console.warn('If you are running production or development app then worry');
  console.warn('If this is components, styleguide or storybook this behavior is expected');
  /* eslint-enable no-console */
  throw e;
}
