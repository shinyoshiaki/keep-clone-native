import React, { FC } from "react";
import { Router, Route } from "./multi/router";
import Main from "./pages/Main";
import Account from "./pages/Account";

const App: FC = () => (
  <Router>
    <Route exact path="/" component={Main} />
    <Route path="/account" component={Account} />
  </Router>
);

export default App;
