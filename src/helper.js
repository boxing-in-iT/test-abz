export const fetchUsers = (page, setUsers, setPage, setHasMore) => {
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

export default fetchUsers;
