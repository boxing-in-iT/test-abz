import React from "react";
import "./index.scss";

const UserCard = ({ user }) => {
  const { ava, name, jobTitle, mail, phone } = user;
  return (
    <div className="card-wrapper">
      <div className="card">
        <img src={ava} />
        <p>{name}</p>
        <p>{jobTitle}</p>
        <p>{mail}</p>
        <p>{phone}</p>
      </div>
    </div>
  );
};

export default UserCard;
