import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import { ThemeProvider } from 'styled-components';

import theme from './style/theme.json';

import GlobalStyles from './style/GlobalStyles';

import Inward from './pages/Inward';
import Outward from './pages/Outward';

const App = () => (
  <ThemeProvider theme={theme}>
    <main>
      <GlobalStyles />
      <Router>
        <Inward path="/inward" />
        <Outward path="/outward" />
      </Router>
    </main>
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
