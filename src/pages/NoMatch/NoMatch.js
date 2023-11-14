import React from "react";
import './NoMatch.css'
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

export const NoMatch = () => {
  const location = useLocation();
  return (
    <h1 className="nomatch">
      Страница <span>{location.pathname}</span> не существует
    </h1>
  )
}