import React from 'react'
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
// import { selectAllPosts, selectPostById, selectPostIds } from './postsSlice';
import { selectPostById } from './postsSlice';

// The below code has rendering performance issue
// const PostsExcerpts = ({post}) => {
//   return (
//     <article>
//       <h3>{post.title}</h3>
//       {/* <p>{post.content.substring(0, 100)}</p> */}
//       {/* <p>{post.body.substring(0, 100)}</p> */}
//       <p className='excerpt'>{post.body.substring(0, 75)}...</p>
//       <p className="postCredit">
//         <Link to={`post/${post.id}`}>View Post</Link>
//         <PostAuthor userId={post.userId} />
//         <TimeAgo timestamp={post.date} />
//       </p>
//       <ReactionButtons post={post} />
//     </article>
//   )
// }

// Performance Issue Fix Code - Approach 1
// let PostsExcerpts = ({post}) => {
//   return (
//     <article>
//       <h3>{post.title}</h3>
//       {/* <p>{post.content.substring(0, 100)}</p> */}
//       {/* <p>{post.body.substring(0, 100)}</p> */}
//       <p className='excerpt'>{post.body.substring(0, 75)}...</p>
//       <p className="postCredit">
//         <Link to={`post/${post.id}`}>View Post</Link>
//         <PostAuthor userId={post.userId} />
//         <TimeAgo timestamp={post.date} />
//       </p>
//       <ReactionButtons post={post} />
//     </article>
//   )
// }

// Performance Issue Fix Code - Approach 2
const PostsExcerpts = ({postId}) => {
  const post = useSelector(state => selectPostById(state, postId));
  return (
    <article>
      <h3>{post.title}</h3>
      {/* <p>{post.content.substring(0, 100)}</p> */}
      {/* <p>{post.body.substring(0, 100)}</p> */}
      <p className='excerpt'>{post.body.substring(0, 75)}...</p>
      <p className="postCredit">
        <Link to={`post/${post.id}`}>View Post</Link>
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  )
}

// Performance Issue Fix Code - Approach 1
// PostsExcerpts = React.memo(PostsExcerpts);
export default PostsExcerpts;
