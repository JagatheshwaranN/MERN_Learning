import React, { useEffect, useState } from "react";

const CommentList = () => {
  const [comments, setComments] = useState("");
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const APP_URL = "https://jsonplaceholder.typicode.com/comments";

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await fetch(APP_URL);
        if (!response.ok)
          throw new Error(`HTTP Error Status: ${response.status}`);
        const data = await response.json();
        setComments(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    (async () => await fetchComments())();
  }, []);

  if (isLoading) return <div>Loading data...</div>;
  if (error) return <div>`Erorr: {error}`</div>;
  return (
    <div>
    <h1>Comments</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>{JSON.stringify(comment)}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommentList;
