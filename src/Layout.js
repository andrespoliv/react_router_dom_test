import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./views/Home";
import { Login } from "./views/Login";
import { NotFound } from "./views/Notfound";
import { Profile } from "./views/Profile";

const Layout = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};
export default Layout;
