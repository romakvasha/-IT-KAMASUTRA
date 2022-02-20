import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = ({
  totalUsersCount,
  pageSize,
  onPageChanget,
  currentPage,
  users,
  followingInProgress,
  unfollow,
  follow,
  ...props
}) => {
  return (
    <div>
      <Paginator
        totalItemsCount={totalUsersCount}
        pageSize={pageSize}
        onPageChanged={onPageChanget}
        currentPage={currentPage}
        {...props}
      />

      <div>
        {users.map((u) => (
          <User
            key={users.id}
            user={u}
            followingInProgress={followingInProgress}
            unfollow={unfollow}
            follow={follow}
          />
        ))}
      </div>
    </div>
  );
};
export default Users;
