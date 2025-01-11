import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const APP_URL = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(APP_URL);
        if (!response.ok)
          throw new Error(`HTTP Error Status: ${response.status}`);

        const data = await response.json();
        console.log(data);
        setUsers(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    (async () => await fetchData())();
  }, []);
  if (loading) return <div>Loading...</div>;
  if (error) return <div>`Error: {error}`</div>;
  return (
    <div>
      <h1>Users</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {/* <strong>{user.name}</strong> - {user.email} */}
            <strong>{JSON.stringify(user)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
