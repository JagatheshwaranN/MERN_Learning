import React from "react";
import { useSelector} from "react-redux";
// import {
//   selectAllPosts,
//   getPostsStatus,
//   getPostsError
// } from "./postsSlice";
import {
  selectPostIds,
  getPostsStatus,
  getPostsError
} from "./postsSlice";

import PostsExcerpts from "./PostsExcerpts";

const PostsList = () => {
  // const posts = useSelector(selectAllPosts);
  const orderedPostsIds = useSelector(selectPostIds);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  // Commenting out the below code to fix the refresh page content load issue
  // Instead of fetching he data here, we will fetch at the very start like users.
  // useEffect(() => {
  //   if (postStatus === "idle") {
  //     dispatch(fetchPosts());
  //   }
  // }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    // The alternate way to show the lastest posts first
    // const orderedPosts = posts
    //   .slice()
    //   .sort((a, b) => b.date.localeCompare(a.date));
    // content = orderedPosts.map((post) => <PostsExcerpts key={post.id} post={post}/>);
    content = orderedPostsIds.map(postId => <PostsExcerpts key={postId} postId={postId}/>);
  } else if(postStatus==='failed') {
    content = <p>{error}</p>; 
  }
  return (
    <section>
      <h2>Posts</h2>
      {/* Simple solution to show the latest posts first */}
      {/* {Array.from(renderedPosts).reverse()} */}
      {content}
    </section>
  );
};

export default PostsList;
