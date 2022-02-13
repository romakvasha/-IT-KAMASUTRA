import React from "react";
import s from "./Paginator.module.css";

const Paginator = ({
  totalUsersCount,
  pageSize,
  onPageChanget,
  currentPage,
}) => {
  const pagesCount = Math.ceil(totalUsersCount / pageSize);

  const pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }

  return (
    <div>
      {pages.map((p) => {
        return (
          <span
            className={currentPage === p && s.selectedPage}
            onClick={(e) => {
              onPageChanget(p);
            }}
          >
            {p}
          </span>
        );
      })}
    </div>
  );
};

export default Paginator;
