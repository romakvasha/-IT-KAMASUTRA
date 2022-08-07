import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import navReducer from "./navPage-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thankMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";
import appReducer from "./app-reducer";

const {
  createStore,
  combineReducers,
  applyMiddleware,
  compose,
} = require("redux");

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  navPage: navReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
});

type ReducerType = typeof reducers; // (globalstate: AppStateType) => AppStateType
export type AppStateType = ReturnType<ReducerType>
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(thankMiddleware))
);

export default store;
