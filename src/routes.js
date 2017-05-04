import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import BrewSessionPage from './containers/BrewSessionPage'; // eslint-disable-line import/no-named-as-default
import HistoryPage from './containers/HistoryPage'; // eslint-disable-line import/no-named-as-default
import NotFoundPage from './components/NotFoundPage';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={BrewSessionPage}/>
    <Route path="brew" component={BrewSessionPage}/>
    <Route path="history" component={HistoryPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Route>
);
