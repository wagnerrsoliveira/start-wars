import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Planets from 'presentation/pages/planets';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Planets} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
