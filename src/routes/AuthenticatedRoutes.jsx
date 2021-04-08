import React from "react";
import {Redirect, Route } from "react-router-dom";
import { getToken } from './../redux/api/auth';

/**
 * Renders the component if the user is authenticated
 *
 * @param {Component} Component
 *
 * @returns {JSX}
 */
const renderComponent = (Component) => (props) => {
  return <Component {...props} />;
};

/**
 * This Component returns a new
 * route based on authenticated status
 *
 * @returns {JSX}
 */

export const isAuthenticated = () => {
  const token = getToken(); 
  return !!token;
};

const AuthorizedRoute = (props) => {
    return (
      <Route { ...props } />
    );
};

const AuthenticatedRoute = (props) => {
  const {component: Component, ...rest} = props;
  const checkisAuthenticated = isAuthenticated();
  const token = getToken();
//   const user = decodeToken(token);

  if (!checkisAuthenticated) {
    return <Redirect to="/login" />;
  }

  return <AuthorizedRoute {...rest} render={renderComponent(Component)} />;
};

export default AuthenticatedRoute;
