import React from 'react'
import { Navigate, Route } from "react-router-dom";
const PrivateRoute = ({ component: Component, auth, ...rest }) => {
  

  return (
    <Route
      {...rest}
      element={auth ? <Component /> : <Navigate to="/" replace />}
    />
  )
}

export default PrivateRoute;