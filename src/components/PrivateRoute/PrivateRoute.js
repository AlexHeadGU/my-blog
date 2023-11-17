import React from "react";
import { Redirect, Route } from "react-router-dom/cjs/react-router-dom.min";
import { APP_ROUTES } from "../../utils/constans";
import { NoMatch } from "../../pages/NoMatch/NoMatch";

export const PrivateRoute = ({
  isLoggedIn,
  path,
  exact,
  children: Component,
  blogPostRoutes
}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={({ location }) => {
        const allRoutes =[...APP_ROUTES, ...blogPostRoutes];
        const isPathExists = allRoutes.some((route) => route === location.pathname);
        if (!isPathExists) return <NoMatch />

        if (isLoggedIn) return Component
        return <Redirect to='/login' />
      }}
    />
  )
}