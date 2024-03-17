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
        if (page === 1) {
          // Если это первая страница, просто устанавливаем новый список пользователей
          setUsers(data.users);
        } else {
          // Если это не первая страница, добавляем новых пользователей к текущему списку
          setUsers((prevUsers) => [...prevUsers, ...data.users]);
        }
        setPage(page + 1); // Увеличиваем номер страницы для следующего запроса
      } else {
        console.error("Server error:", data.message);
      }
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
};

export default fetchUsers;
