import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUsersProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    const { match, authorizedUserId, history, getUsersProfile, getStatus } =
      this.props;
    let userId = match.params.userId;
    if (!userId) {
      userId = authorizedUserId;
      if (!userId) {
        history.push("/login");
      }
    }
    getUsersProfile(userId);
    getStatus(userId);
  }

  render() {
    return (
      <div>
        <Profile
          {...this.props}
          profile={this.props.profile}
          status={this.props.status}
          updateStatus={this.props.updateStatus}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  authorizedUserId: state.auth.userId,
  isAuth: state.auth.isAuth,
});

export default compose(
  connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
  withRouter
  //withAuthRedirect
)(ProfileContainer);
