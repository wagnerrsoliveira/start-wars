import React from 'react';
import { ThemeProvider } from 'styled-components';

import { theme } from 'presentation/theme';

function Main() {
  return (
    <ThemeProvider theme={theme}>
      <div>Star-wars planets</div>);
    </ThemeProvider>
  );
}

export default Main;
