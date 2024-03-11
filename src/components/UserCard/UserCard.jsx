import React from "react";
import "./index.scss";

const UserCard = ({ user }) => {
  const { email, name, phone, photo, position } = user;
  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={photo} />
        <p>{name}</p>
        <p>{position}</p>
        <p>{email}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
