import React, { FC } from "react";
import { StoreContext } from "redux-react-hook";
import { Router, Route } from "./multi/router";
import Main from "./pages/Main";
import Account from "./pages/Account";
import createStore from "./modules/createStore";

const store = createStore();

const App: FC = () => (

    <StoreContext.Provider value={store}>
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/account" component={Account} />
      </Router>
    </StoreContext.Provider>

);

export default App;
