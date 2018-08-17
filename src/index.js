import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './styles/reset.css';
import './styles/fonts.css';

import {
  Home, About, Contact, Imprint, Projects,
} from './views';

ReactDOM.render(
  <Fragment>
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/contact" component={Contact} />
        <Route path="/imprint" component={Imprint} />
      </Switch>
    </Router>
  </Fragment>,
  document.getElementById('root'),
);
