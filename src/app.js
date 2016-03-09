import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router'
import { createHashHistory } from 'history';
import Wrap from './components/wrap';
import Home from './components/home';
import About from './components/about';

let history = new createHashHistory();

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
       <Route path="/" component={Wrap}>
         <IndexRoute component={Home}/>
         <Route path="/home" component={Home}/>
          <Route path="/about" component={About}/>
       </Route>
      </Router>
    </Provider>,
    document.getElementById('app')
);
