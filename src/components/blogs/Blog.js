import React from "react";
import { Link } from "react-router-dom";

const Blog = ({ blog }) => {
  const { id, title, image, tags, likes, createdAt, isSaved } = blog || {};

  const tagsQuery = tags.map((tag) => ` #${tag}`).join(",");
  return (
    <div className="lws-card">
      <Link to={`posts/${id}`}>
        <img src={image} className="lws-card-image" alt="" />
      </Link>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">{createdAt}</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up" />
            {likes}
          </p>
        </div>
        <Link to={`posts/${id}`} className="lws-postTitle">
          {title}
        </Link>
        <div className="lws-tags">
          <span>{tagsQuery}</span>
        </div>
        {/* Show this element if post is saved */}
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> {isSaved && "Saved"} </span>
        </div>
      </div>
    </div>
  );
};

export default Blog;
