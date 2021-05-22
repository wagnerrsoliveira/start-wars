import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'presentation/theme';
import Routes from './routes';

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default Main;
