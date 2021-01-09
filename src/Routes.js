import React from 'react';
import { Switch } from 'react-router-dom';
import RouteHandle from './components/RouteHandle';

import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Orders from './pages/Orders';
import Profile from './pages/Profile';
import NotFound from './pages/404';

export default () => {
    return (
        <Switch>
            <RouteHandle exact path="/" component={Home} />
            <RouteHandle path="/login" component={Login} />
            <RouteHandle path="/register" component={Register} />
            <RouteHandle private path="/orders" component={Orders} />
            <RouteHandle private path="/profile" component={Profile} />
            <RouteHandle component={NotFound} />
        </Switch>
    );
};