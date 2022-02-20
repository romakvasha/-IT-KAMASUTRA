import React from "react";
import "./App.css";
import Nav from "./components/NavBar/Nav";
import { Route, withRouter } from "react-router-dom";
import {
  DIALOGS,
  FINDUSERS,
  LOGIN,
  PROFILE,
} from "./components/NavBar/constats";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import { connect, Provider } from "react-redux";
import { initializeApp } from "../src/redux/app-reducer";
import { compose } from "redux";
import Preloader from "./components/common/preloader/preloader";
import { BrowserRouter } from "react-router-dom";
import store from "./redux/redux-store";
import { withSuspense } from "./hoc/withSuspense";

const DialogsContainer = React.lazy(() =>
  import("./components/Dialogs/DialogsContainer")
);
const ProfileContainer = React.lazy(() =>
  import("./components/Profile/ProfileContainer")
);

class App extends React.Component {
  componentDidMount() {
    this.props.initializeApp();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Nav />
        <div class="app-wrapper-content">
          <Route path={DIALOGS} render={withSuspense(DialogsContainer)} />
          <Route path={PROFILE} render={withSuspense(ProfileContainer)} />
          <Route path={FINDUSERS} render={() => <UsersContainer />} />
          <Route path={LOGIN} render={() => <Login />} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
});

const AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp })
)(App);

const MainApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  );
};

export default MainApp;
