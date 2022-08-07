import React, { FC } from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {UserType} from '../../types/types';

type PropsType = {
  totalUsersCount: number
  pageSize: number
  currentPage: number
  onPageChanget: (pageNumber: number) => void
  users: Array<UserType>
  followingInProgress: Array<number>
  unfollow: (userId: number) => void
  follow: (userId: number) => void
}



const Users: FC<PropsType> = ({
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
          // @ts-ignore
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
