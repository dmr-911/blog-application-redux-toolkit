import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedBlogs } from "../../features/relatedBlogs/relatedBlogsSlice";
import Loader from "../loader/Loader";
import RelatedPost from "./RelatedPost";

const RelatedPosts = ({ blogId, tags }) => {
  const dispatch = useDispatch();
  const { isLoading, isError, blogs, error } = useSelector(
    (state) => state.relatedBlogs
  );

  // effect for related posts
  useEffect(() => {
    dispatch(fetchRelatedBlogs({ blogId, tags }));
  }, [dispatch, blogId, tags]);

  // decide what to render
  let content;
  if (isLoading) content = <Loader />;

  if (!isLoading && !isError && !blogs?.length)
    content = <div>No related videos available</div>;

  if (!isLoading && isError && error) content = <div>{error}</div>;

  if (!isLoading && !isError && blogs?.length)
    content = blogs?.map((blog) => <RelatedPost key={blog.id} post={blog} />);

  return <div className="space-y-4 related-post-container">{content}</div>;
};

export default RelatedPosts;
