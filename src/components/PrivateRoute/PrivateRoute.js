import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { APP_ROUTES } from "../../utils/constans";
import { NoMatch } from "../../pages/NoMatch/NoMatch";

export const PrivateRoute = ({
  isLoggedIn,
  path,
  exact,
  children: Component
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) => {
        const isPathExists = APP_ROUTES.some(route => route === location.pathname);
        if (!isPathExists) return <NoMatch />

        if (isLoggedIn) return Component
        return <Redirect to='/login' />
      }}
    />
  )
}