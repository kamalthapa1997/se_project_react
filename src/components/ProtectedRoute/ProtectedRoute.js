import React, { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, ...props }) {
  const { loggedIn } = useContext(CurrentUserContext);
  return <Route {...props}> {loggedIn ? children : <Redirect to="/" />}</Route>;
}

export default ProtectedRoute;
