import React, { FC, createContext } from "react";
import { StoreContext } from "redux-react-hook";
import { Router, Route } from "./multi/router";
import Main from "./pages/Main";
import Account from "./pages/Account";
import createStore from "./modules/createStore";
import { History } from "history";

const store = createStore();

const initialContext = { history: undefined, setHistory: () => {} };

export const Context = createContext<{
  history?: History;
  setHistory: (h: History) => void;
}>(initialContext);

const App: FC = () => (
  <Context.Provider value={initialContext}>
    <StoreContext.Provider value={store}>
      <Router>
        <Route exact path="/" component={Main} />
        <Route path="/account" component={Account} />
      </Router>
    </StoreContext.Provider>
  </Context.Provider>
);

export default App;
