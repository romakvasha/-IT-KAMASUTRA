import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import navReducer from "./navPage-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";
import thankMiddleware from "redux-thunk";
import { reducer as formReducer } from "redux-form";

const { createStore, combineReducers, applyMiddleware } = require("redux");

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  navPage: navReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
});

const store = createStore(reducers, applyMiddleware(thankMiddleware));

export default store;
