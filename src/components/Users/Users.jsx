import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import UserCard from "../UserCard/UserCard";
import { UserUpdateContext } from "../../App";
import fetchUsers from "../../helper";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { userUpdated } = useContext(UserUpdateContext);

  console.log("USERUPFA: ", userUpdated);

  useEffect(() => {
    setPage(1);
    fetchUsers(page, setUsers, setPage, setHasMore); // Call fetchUsers from helper
  }, [userUpdated, page]); // Add page to the dependency array

  const handleShowMore = () => {
    setPage(page + 1);
  };

  return (
    <section>
      <h2>Working with GET request</h2>
      <div className="cards">
        {users.map((userData, i) => (
          <UserCard key={userData.id} user={userData} />
        ))}
      </div>
      {hasMore && (
        <div className="button-section">
          <button className="button" onClick={handleShowMore}>
            Show more
          </button>
        </div>
      )}
    </section>
  );
};

export default Users;
