import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../features/blogs/blogsSlice";
import Loader from "../loader/Loader";
import Blog from "./Blog";

const Blogs = () => {
  const dispatch = useDispatch();
  const { isLoading, isError, error, blogs } = useSelector(
    (state) => state.blogs
  );

  // effect for fetching blogs
  useEffect(() => {
    const cleanup = () => dispatch(fetchBlogs());
    return () => {
      cleanup();
    };
  }, [dispatch]);

  // decide what to render
  let content;

  if (isLoading) content = <Loader />;

  if (!isLoading && !isError && !blogs?.length)
    content = <div>No blogs available</div>;

  if (!isLoading && !isError && blogs?.length)
    content = blogs.map((blog) => <Blog key={blog.id} blog={blog} />);
  return (
    <main className="post-container" id="lws-postContainer">
      {content}
    </main>
  );
};

export default Blogs;
