import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
import { createHashHistory } from 'history';

import Wrap from './components/wrap';
import Home from './components/home';
import Counter from './components/counter';

let history = new createHashHistory();
//Routes 
const routes = (
  <Router history={browserHistory}>
     <Route path="/" component={Wrap}>
       <IndexRoute component={Home}/>
       <Route path="/home" component={Home}/>
        <Route path="/counter" component={Counter}/>
     </Route>
  </Router>
);

ReactDOM.render(
    <Provider store={store}>
      <Router routes={routes} />
    </Provider>,
    document.getElementById('app')
);
