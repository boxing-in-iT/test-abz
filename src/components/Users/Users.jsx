import React, { useContext, useEffect, useState } from "react";
import "./index.scss";
import UserCard from "../UserCard/UserCard";
import { UserUpdateContext } from "../../App";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const { userUpdated } = useContext(UserUpdateContext);

  console.log("USERUPFA: ", userUpdated);

  const fetchUsers = () => {
    fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          if (data.users.length < 6) {
            setHasMore(false);
          }
          // Если это первая страница, очищаем пользователей
          if (page === 1) {
            setUsers(data.users);
          } else {
            setUsers((prevUsers) => [...prevUsers, ...data.users]);
          }
        } else {
          console.error("Server error:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    setPage(1);
    fetchUsers();
  }, [userUpdated]);

  useEffect(() => {
    fetchUsers();
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
