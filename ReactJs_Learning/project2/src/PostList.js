import React, { useEffect, useState } from "react";

const PostList = () => {
  const [posts, setPosts] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const APP_URL = "https://jsonplaceholder.typicode.com/posts";

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(APP_URL);
        if (!response.ok)
          throw new Error(`Error: HTTP Error Status: ${response.status}`);
        const data = await response.json();
        console.log(data);
        setPosts(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };
    (async () => await fetchPosts())();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>`Error: {error}`</div>;

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            {/* <strong>{post.id}</strong>
            <br />
            <strong>{post.title}</strong>
            <br />
            <strong>{post.body}</strong> */}
            <strong>{JSON.stringify(post)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
