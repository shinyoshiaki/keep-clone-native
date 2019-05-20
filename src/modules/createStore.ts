import {
  createStore as reduxCreateStore,
  applyMiddleware,
  combineReducers
} from "redux";
import logger from "redux-logger";
import main, { State } from "./main";
import ui, { StateUi } from "./ui";
import user, { StateUser } from "./user";

const rootReducer = combineReducers({
  main,
  ui,
  user
});

export default function createStore() {
  const store = reduxCreateStore(rootReducer, applyMiddleware(logger));
  return store;
}

export interface ReduxState {
  main: State;
  ui: StateUi;
  user: StateUser;
}
