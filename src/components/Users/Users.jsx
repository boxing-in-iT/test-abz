import React from "react";
import "./index.scss";
import user1 from "../../assets/img/user1.png";
import user2 from "../../assets/img/user2.png";
import user3 from "../../assets/img/user3.png";
import user4 from "../../assets/img/user4.png";
import user5 from "../../assets/img/user5.png";
import user6 from "../../assets/img/user6.png";
import UserCard from "../UserCard/UserCard";

const Users = () => {
  const users = [
    {
      ava: user1,
      name: "Salvador Stewart Flynn Thomas Salva Salve...",
      jobTitle: "Leading specialist of the department of cent...",
      mail: "frontend_develop@gmail.com",
      phone: "+38 (098) 278 44 24",
    },
    {
      ava: user2,
      name: "Takamaru Ayako Jurrien",
      jobTitle: "Lead Independent Director ",
      mail: "Takamuru@gmail.com",
      phone: "+38 (098) 278 90 24",
    },
    {
      ava: user3,
      name: "Ilya",
      jobTitle: "Co-Founder and CEO",
      mail: "Ilya_founder@gmail.com",
      phone: "+38 (098) 235 44 24",
    },
    {
      ava: user4,
      name: "Alexandre",
      jobTitle: "Leading specialist of the department of cent...",
      mail: "frontend_develop@gmail.com",
      phone: "+38 (098) 278 44 24",
    },
    {
      ava: user5,
      name: "Winny",
      jobTitle: "Former Senior Director",
      mail: "Winny_develop@gmail.com",
      phone: "+38 (098) 278 22 88",
    },
    {
      ava: user6,
      name: "Simon",
      jobTitle: "President of Commerce",
      mail: "Simon@gmail.com",
      phone: "+38 (098) 278 44 00",
    },
  ];

  return (
    <section className="">
      <h2>Working with GET request</h2>
      <div className="cards">
        {users.map((data, i) => (
          <UserCard user={data} />
        ))}
      </div>
      <div className="button-section">
        <button className="button">Show more</button>
      </div>
    </section>
  );
};

export default Users;
