import React from "react";
import s from "./Users.module.css";

const Users = (props) => {
  if (props.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        followed: false,
        fullName: "Руслана",
        status: "Привіт",
        location: { city: "Житомир", country: "Україна" },
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
      },
      {
        id: 2,
        followed: true,
        fullName: "Роман",
        status: "Привіт",
        location: { city: "Вінниця", country: "Україна" },
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
      },
      {
        id: 3,
        followed: false,
        fullName: "Тарас",
        status: "Привіт",
        location: { city: "Легніца", country: "Польша" },
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
      },
      {
        id: 4,
        followed: true,
        fullName: "Кузьміч",
        status: "Привіт",
        location: { city: "Легніца", country: "Польша" },
        img: "https://upload.wikimedia.org/wikipedia/commons/0/0e/Felis_silvestris_silvestris.jpg",
      },
    ]);
  }

  return (
    <div>
      {props.users.map((u) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.img} className={s.usersPhoto} alt="аватарка" />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  UnFollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

export default Users;
