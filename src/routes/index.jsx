// react libraries
import * as React from 'react';

import { Route, Switch } from 'react-router-dom';
import Contact from './../components/Contact/';
import Home from './../components/Home';
import Login from './../components/SimpleForm'
import NotFound from '../components/NotFound';
import Dashboard from '../components/Dashboard';
import AuthenticatedRoute from './AuthenticatedRoutes';
import SingleStory from './../components/SingleStory';

const Routes = () => (
  <Switch>
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/contact/:id" component={Contact} />
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={Login} />
    <AuthenticatedRoute exact path="/dashboard" component={Dashboard} />
    <AuthenticatedRoute exact path="/story/:id" component={SingleStory} />
    
    <Route path="*" component={NotFound} />
  </Switch>
);

export default Routes;
