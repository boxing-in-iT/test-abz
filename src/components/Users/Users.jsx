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

  useEffect(() => {
    page === 1 ? fetchUsers(page, setUsers, setPage, setHasMore) : setPage(1);
  }, [userUpdated]);

  useEffect(() => {
    console.log("SSS");
    fetchUsers(page, setUsers, setPage, setHasMore);
  }, [page]);

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
