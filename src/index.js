import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Details } from 'pages';
import { Navigation, Banner } from 'components';

import configureStore from './data/store';
import App from './App';


const store = configureStore();

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div className="content">
          <Banner content="smartphone shop" />
          <Navigation />
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/details" component={Details} />
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
