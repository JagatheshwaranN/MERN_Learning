import { useSelector } from "react-redux";
import { selectUserById } from "./usersSlice";
import { selectPostsByUser } from "../posts/postsSlice";
import { Link, useParams } from "react-router-dom";

const UserPage = () => {
  const { userId } = useParams();

  const user = useSelector((state) => selectUserById(state, Number(userId)));

// The below code has rendering performance issue
//   const postsOfUser = useSelector((state) => {
//     const allPosts = selectAllPosts(state);
//     return allPosts.filter((post) => post.userId === Number(userId));
//   });

// The optimized code for the above logic
const postsOfUser = useSelector(state => selectPostsByUser(state, Number(userId)));

  const postTitles = postsOfUser.map((post) => (
    <li key={post.id}>
      <Link to={`/post/${post.id}`}>{post.title}</Link>
    </li>
  ));
  return (
    <section>
      <h2>{user?.name}</h2>
      <ol>{postTitles}</ol>
    </section>
  );
};

export default UserPage;
