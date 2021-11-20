import authReducer from "./auth-reducer";
import messagesReducer from "./messages-reducer";
import navReducer from "./navPage-reducer";
import profileReducer from "./profile-reducer";
import usersReducer from "./users-reducer";

const { createStore, combineReducers } = require("redux");

const reducers = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  navPage: navReducer,
  usersPage: usersReducer,
  auth: authReducer,
});

const store = createStore(reducers);

export default store;
