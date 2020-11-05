import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from '@material-ui/core';
import { createTheme } from './theme/theme.index';

ReactDOM.render(
  <ThemeProvider theme={createTheme('defaultTheme')}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
