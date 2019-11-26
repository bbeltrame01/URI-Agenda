// https://github.com/StephenChou1017/react-big-scheduler
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Login from "views/Login/Login.js";
import Register from "views/Register/Register.js";
import Workspace from "views/Workspace/Workspace.js";
import Admin from "layouts/Admin.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/login" exact={true} component={Login} />
      <Route path="/register" exact={true} component={Register} />
      <Route path="/workspace" exact={true} component={Workspace} />
      <Route path="/admin" component={Admin} />
      <Redirect from="/" to="/login" />
    </Switch>
  </Router>,
  document.getElementById("root")
);
