import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { UserIsAuthenticated } from './util/wrappers.js';

// Layouts
import App from './App';
import Home from './layouts/home/Home';
import DashboardContainer from './layouts/dashboard/DashboardContainer';
import ProfileContainer from './user/layouts/profile/ProfileContainer';
import StorefrontContainer from './layouts/store/StorefrontContainer';
import CustomerContainer from './layouts/customer/CustomerContainer';

// Redux Store
import store from './store'

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render((
    <Provider store={store}>
      <Router history={history}>
        <Route path="/" component={App}>
          <IndexRoute component={Home} />
          <Route path="dashboard" component={UserIsAuthenticated(DashboardContainer)} />
          <Route path="profile" component={UserIsAuthenticated(ProfileContainer)} />
          <Route path="store/:id/:storeNum" component={UserIsAuthenticated(StorefrontContainer)} />
          <Route path="customer/:id/:storeNum" component={UserIsAuthenticated(CustomerContainer)} />
        </Route>
      </Router>
    </Provider>
  ),
  document.getElementById('root')
)
