import React from 'react';
import { Route, Switch, Router } from 'react-router-dom';
import UserLayout from './layout/UserLayout';
import BasicLayout from './layout/BasicLayout';
import createBrowserHistory from 'history/createBrowserHistory'
import AuthorizedRoute from './components/AuthorizedRoute';

const history = createBrowserHistory()

function RouterConfig() {
   return (
       <Router history = { history }>
            <Switch>
                <Route path='/user' component={ UserLayout } />
                <AuthorizedRoute path='/' component={ BasicLayout } />
            </Switch>
        </Router>
   )
}

export default RouterConfig;