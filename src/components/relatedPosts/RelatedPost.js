import React from "react";
import { Link } from "react-router-dom";

const RelatedPost = ({ post }) => {
  const { id, title, image, tags, createdAt } = post || {};

  const tagsQuery = tags?.map((tag) => ` #${tag}`).join(",") || "";
  return (
    <div className="card">
      <Link to={`/blogs/${id}`}>
        <img src={image} className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link
          to={`/blogs/${id}`}
          className="text-lg post-title lws-RelatedPostTitle"
        >
          {title}
        </Link>
        <div className="mb-0 tags">
          <span>{tagsQuery}</span>
        </div>
        <p>{createdAt}</p>
      </div>
    </div>
  );
};

export default RelatedPost;
