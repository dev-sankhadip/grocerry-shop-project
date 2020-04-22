import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Dashboard } from './dashboard';
import { Login } from './login';

export const Layout=()=>
{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="" component={ Login } />
                <Route path="/dashboard" component={ Dashboard } />
            </Switch>
        </BrowserRouter>
    )
}