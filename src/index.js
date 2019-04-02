import './rhlConfig';

import React from 'react';
import { render } from 'react-dom';
import App from './App.js';

const title = 'A minilil bit of React & Webpack';
render(
  <App title={ title } />,
  document.getElementById('root-entry')
);
