import React from 'react'
import { Switch, Route } from 'react-router'
import Home from './components/Home'
import Profile from './components/Profile'


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path='/profile' component={Profile} />
        </Switch>
    );
};

export default Router;