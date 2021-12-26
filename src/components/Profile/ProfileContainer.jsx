import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import { getUsersProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { LOGIN } from "../NavBar/constats";
import { Redirect } from "react-router-dom";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsersProfile(userId);
  }

  render() {
    if (!this.props.isAuth) return <Redirect to={LOGIN} />;
    return (
      <div>
        <Profile {...this.props} profile={this.props.profile} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  isAuth: state.auth.isAuth,
});

const WitcUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, { getUsersProfile })(
  WitcUrlDataContainerComponent
);
