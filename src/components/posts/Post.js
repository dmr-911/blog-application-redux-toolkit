import React from "react";

const Post = () => {
  return (
    <div className="lws-card">
      <a href="post.html">
        <img src="./images/git.webp" className="lws-card-image" alt="" />
      </a>
      <div className="p-4">
        <div className="lws-card-header">
          <p className="lws-publishedDate">2023-05-01</p>
          <p className="lws-likeCount">
            <i className="fa-regular fa-thumbs-up" />
            100
          </p>
        </div>
        <a href="post.html" className="lws-postTitle">
          {" "}
          Top Github Alternatives{" "}
        </a>
        <div className="lws-tags">
          <span>#python,</span> <span>#tech,</span> <span>#git</span>
        </div>
        {/* Show this element if post is saved */}
        <div className="flex gap-2 mt-4">
          <span className="lws-badge"> Saved </span>
        </div>
        {/* Show this element if post is saved Ends */}
      </div>
    </div>
  );
};

export default Post;
