// api.js
export const fetchUsers = async (page, setUsers, setPage, setHasMore) => {
  try {
    const response = await fetch(
      `https://frontend-test-assignment-api.abz.agency/api/v1/users?page=${page}&count=6`
    );
    const data = await response.json();

    if (data.success) {
      if (data.users.length < 6) {
        setHasMore(false);
      }
      if (page === 1) {
        setUsers(data.users);
      } else {
        setUsers((prevUsers) => [...prevUsers, ...data.users]);
      }
    } else {
      console.error("Server error:", data.message);
    }
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};

export default fetchUsers;
