import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "./routes";
import StyledApp from "./styles/App.styles";

const App = () => {
  const getRoutes = () =>
    routes.map((route, index) => (
      <Route key={index} path={route.path} component={route.component} />
    ));

  return (
    <StyledApp>
      <Switch>
        {getRoutes()}
        <Redirect to="/main" />
      </Switch>
    </StyledApp>
  );
};

export default App;
