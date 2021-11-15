import { Route, Redirect } from "react-router-dom";
import React from "react";
const ProtectedRoute = ({ component: Comp, path, ...rest }) => {
  const token = localStorage.getItem("token");
  return (
    <Route
      path={path}
      {...rest}
      render={(props) => {
        return token ? (
          <Comp {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: {
                prevLocation: path,
                error: `Erro de Autenticação de Usuário!`,
              },
            }}
          />
        );
      }}
    />
  );
};

export default ProtectedRoute;
