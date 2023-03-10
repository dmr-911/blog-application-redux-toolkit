import React from "react";
import { Link } from "react-router-dom";

const RelatedPost = () => {
  return (
    <div className="card">
      <Link to="/">
        <img src="/images/ai.jpg" className="card-image" alt="" />
      </Link>
      <div className="p-4">
        <Link to="/" className="text-lg post-title lws-RelatedPostTitle">
          The future of Artificial Inteligence
        </Link>
        <div className="mb-0 tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        <p>2020-07-15</p>
      </div>
    </div>
  );
};

export default RelatedPost;
