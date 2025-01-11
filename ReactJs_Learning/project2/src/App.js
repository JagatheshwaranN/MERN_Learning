import React, { useEffect, useState } from "react";

const App = () => {
  const USERS_URL = "https://jsonplaceholder.typicode.com/users";
  const COMMENTS_URL = "https://jsonplaceholder.typicode.com/comments";
  const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [dataType, setDataType] = useState("Users");

  const fetchData = async (type) => {
    setLoading(true);
    setError(null);
    setData([]);

    let url = "";
    switch (type) {
      case "Users":
        url = USERS_URL;
        break;
      case "Comments":
        url = COMMENTS_URL;
        break;
      case "Posts":
        url = POSTS_URL;
        break;
      default:
        break;
    }
    try {
      const response = await fetch(url);
      if (!response.ok){
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(dataType);
  }, [dataType]);

  return (
    <div>
      <div className="header">
        <button onClick={() => setDataType("Users")}>Users</button>
        <button onClick={() => setDataType("Comments")}>Comments</button>
        <button onClick={() => setDataType("Posts")}>Posts</button>
      </div>
      <div className="content">
        {loading && <div>Loading...</div>}
        {error && <div>Error: {error}</div>}
        {!loading && !error && (
          <div>
            <h1>{dataType}</h1>
            <ul>
              {data.map((item) => (
                <li key={item.id}>
                  {dataType ==="Users" && (
                  <div>
                    <strong>{JSON.stringify(item)}</strong>
                  </div>
                  )}
                  {dataType ==="Comments" && (
                  <div>
                    <strong>{JSON.stringify(item)}</strong>
                  </div>
                  )}
                  {dataType ==="Posts" && (
                  <div>
                    <strong>{JSON.stringify(item)}</strong>
                  </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
