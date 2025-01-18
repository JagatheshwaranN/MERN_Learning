import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectAllPosts,
  getPostsStatus,
  getPostsError,
  fetchPosts,
} from "./postsSlice";
import { useEffect } from "react";
import PostsExcerpts from "./PostsExcerpts";

const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts);
  const postStatus = useSelector(getPostsStatus);
  const error = useSelector(getPostsError);

  useEffect(() => {
    if (postStatus === "idle") {
      dispatch(fetchPosts());
    }
  }, [postStatus, dispatch]);

  let content;
  if (postStatus === "loading") {
    content = <p>"Loading..."</p>;
  } else if (postStatus === "succeeded") {
    // The alternate way to show the lastest posts first
    const orderedPosts = posts
      .slice()
      .sort((a, b) => b.date.localeCompare(a.date));
    content = orderedPosts.map((post) => <PostsExcerpts key={post.id} post={post}/>);
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
