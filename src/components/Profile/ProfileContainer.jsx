import React from "react";
import { connect } from "react-redux";
import Profile from "./Profile";
import {
  getUsersProfile,
  getStatus,
  updateStatus,
} from "../../redux/profile-reducer";
import { withRouter } from "react-router";
import { withAuthRedirect } from "../../hoc/wuthAuthRedirect";
import { compose } from "redux";
class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      userId = 2;
    }
    this.props.getUsersProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    //if (!this.props.isAuth) return <Redirect to={LOGIN} />;
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
});

export default compose(
  connect(mapStateToProps, { getUsersProfile, getStatus, updateStatus }),
  withRouter
  //withAuthRedirect
)(ProfileContainer);
