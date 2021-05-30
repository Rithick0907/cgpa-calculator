import React from "react";
import { Switch, Redirect, Route } from "react-router-dom";
import routes from "./routes";
import StyledApp from "./styles/App.styles";

const App = () => {
  const getRoutes = () =>
    routes.map(({ component, ...otherProps }, index) => (
      <Route key={index} component={component} {...otherProps} />
    ));

  return (
    <StyledApp>
      <Switch>
        {getRoutes()}
        <Redirect to="/course" />
      </Switch>
    </StyledApp>
  );
};

export default App;
