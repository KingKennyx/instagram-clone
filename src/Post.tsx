import React from "react";
import "./Post.scss";
import Avatar from "@material-ui/core/Avatar";

function Post({ username, caption, imageUrl }) {
  return (
    <div className="post">
      <Avatar className="post__avatar" alt="KingKennyx" src="" />
      <h3>{username}</h3>
      <img className="post__image" src={imageUrl} alt="" />
      <h4 className="post__text">
        <strong>{username}:</strong> {caption}
      </h4>
    </div>
  );
}

export default Post;
