import React from "react";
import { connect } from "react-redux";
import {
  follow,
  setCurrentPage,
  setTotalUsersCount,
  setUsers,
  toggletIsFetching,
  unfollow,
} from "../../redux/users-reducer";
import Users from "./Users";
import * as axios from "axios";
import Preloader from "../common/preloader/preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggletIsFetching(true);
    usersAPI.getUsers().then((data) => {
      this.props.toggletIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalUsersCount(data.totalCount);
    });
  }

  onPageChanget = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggletIsFetching(true);
    usersAPI.getUsers().then((data) => {
      this.props.toggletIsFetching(false);
      this.props.setUsers(data.items);
    });
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        <Users
          totalUsersCount={this.props.totalUsersCount}
          pageSize={this.props.pageSize}
          currentPage={this.props.currentPage}
          onPageChanget={this.onPageChanget}
          users={this.props.users}
          follow={this.props.follow}
          unfollow={this.props.unfollow}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  };
};
/*const mapDispatchToProps = (dispatch) => {
  return {
    follow: (userId) => {
      dispatch(followAC(userId));
    },
    unfollow: (userId) => {
      dispatch(unfollowAC(userId));
    },
    setUsers: (users) => {
      dispatch(setUsersAC(users));
    },
    setCurrentPage: (pageNumber) => {
      dispatch(setCurrentPageAC(pageNumber));
    },
    setTotalUsersCount: (totalCount) => {
      dispatch(setTotalUsersCountAC(totalCount));
    },
    toggletIsFetching: (isFetching) => {
      dispatch(toggletIsFetchingAC(isFetching));
    },
  };
};*/

const FindUsersContainer = connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggletIsFetching,
})(UsersContainer);

export default FindUsersContainer;
