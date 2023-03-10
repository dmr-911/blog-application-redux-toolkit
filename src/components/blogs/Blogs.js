import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Blog from "./Blog";

const Blogs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const cleanup = () => dispatch(fetchBlogs());
    return () => {
      cleanup();
    };
  }, [dispatch]);

  return (
    <main className="post-container" id="lws-postContainer">
      <Blog />
    </main>
  );
};

export default Blogs;
