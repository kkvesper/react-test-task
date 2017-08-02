import React from 'react';
import { render } from 'react-dom';
import { App } from './app/app';

import 'font-awesome/scss/font-awesome.scss';

try {
  const appContainer = document.getElementById('render-target');
  render(<App />, appContainer);
} catch (e) {
  /* eslint-disable no-console */
  console.warn('main.js is unable to find application container.');
  console.warn('If you are running production or development app then worry');
  console.warn('If this is components, styleguide or storybook this behavior is expected');
  /* eslint-enable no-console */
  throw e;
}
