// Users.js
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

// import React, { useContext, useEffect, useState } from "react";
// import "./index.scss";
// import UserCard from "../UserCard/UserCard";
// import { UserUpdateContext } from "../../App";

// const Users = () => {
//   const [users, setUsers] = useState([]);
//   const [page, setPage] = useState(1);
//   const [hasMore, setHasMore] = useState(true);

//   const { userUpdated } = useContext(UserUpdateContext);

//   const fetchUsers = () => {
//     debugger;
//     fetch(
//       `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
//     )
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.success) {
//           if (data.users.length < 6) {
//             setHasMore(false);
//           }
//           if (page === 1) {
//             setUsers(data.users);
//           } else {
//             setUsers((prevUsers) => [...prevUsers, ...data.users]);
//           }
//         } else {
//           console.error("Server error:", data.message);
//         }
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   useEffect(() => {
//     setPage(1);
//     fetchUsers();
//   }, [userUpdated]);

//   useEffect(() => {
//     fetchUsers();
//   }, [page]);

//   const handleShowMore = () => {
//     setPage(page + 1);
//   };

//   return (
//     <section>
//       <h2>Working with GET request</h2>
//       <div className="cards">
//         {users.map((userData, i) => (
//           <UserCard key={userData.id} user={userData} />
//         ))}
//       </div>
//       {hasMore && (
//         <div className="button-section">
//           <button className="button" onClick={handleShowMore}>
//             Show more
//           </button>
//         </div>
//       )}
//     </section>
//   );
// };

// export default Users;
