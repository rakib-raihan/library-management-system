import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Index from "./public/Index";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/not-found" component={NotFound} />
        <Route exact path="/" component={Index} />
        <Redirect to="/not-found" />
      </Switch>
    </div>
  );
}

export default App;
