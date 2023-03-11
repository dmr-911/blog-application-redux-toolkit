import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import GoHome from "../components/GoHome";
import RelatedPosts from "../components/relatedPosts/RelatedPosts";
import {
  fetchBlog,
  updateBlog,
  updateBlogSaved,
} from "../features/blog/blogSlice";

const Blog = () => {
  const { blogId } = useParams();
  const dispatch = useDispatch();
  const { blog, isLoading, isError, error } = useSelector(
    (state) => state.blog
  );

  const { id, image, description, title, createdAt, likes, tags, isSaved } =
    blog || {};

  const tagsQuery = tags?.map((tag) => ` #${tag}`).join(",");

  // effect for fetch blog
  useEffect(() => {
    dispatch(fetchBlog({ id: blogId }));
  }, [dispatch, blogId]);

  // likes handler
  const handleLikes = (id, likes) => {
    dispatch(updateBlog({ id, totalLikes: likes + 1 }));
  };

  // saved handler
  const handleSaved = (id, isSaved) => {
    dispatch(updateBlogSaved({ id, isSaved }));
  };
  return (
    <div>
      {/* Go Home / Go Back */}
      <GoHome />
      <section className="post-page-container">
        {/* detailed post  */}
        <main className="post">
          <img
            src={image}
            alt="github"
            className="w-full rounded-md"
            id="lws-megaThumb"
          />
          <div>
            <h1 className="mt-6 text-2xl post-title" id="lws-singleTitle">
              {title}
            </h1>
            <div className="tags" id="lws-singleTags">
              <span>{tagsQuery}</span>
            </div>
            <div className="btn-group">
              {/* handle like on button click */}
              <button
                className="like-btn"
                id="lws-singleLinks"
                onClick={() => handleLikes(id, likes)}
              >
                <i className="fa-regular fa-thumbs-up" /> {likes}
              </button>
              {/* handle save on button click */}
              {/* use ".active" class and "Saved" text  if a post is saved, other wise "Save" */}
              <button
                className={`${isSaved && "active"} save-btn`}
                id="lws-singleSavedBtn"
                onClick={() => handleSaved(id, isSaved)}
              >
                <i className="fa-regular fa-bookmark" /> {isSaved && "Saved"}
              </button>
            </div>
            <div className="mt-6">
              <p>{description}</p>
            </div>
          </div>
        </main>
        {/* detailed post ends */}
        {/* related posts */}
        <aside>
          <h4 className="mb-4 text-xl font-medium" id="lws-relatedPosts">
            Related Posts
          </h4>
          <RelatedPosts blogId={id} tags={tags} />
        </aside>
        {/* related posts ends */}
      </section>
    </div>
  );
};

export default Blog;
