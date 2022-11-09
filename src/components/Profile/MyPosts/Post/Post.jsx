import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.item}>
      <img
        src="https://pyxis.nymag.com/v1/imgs/51b/28a/622789406b8850203e2637d657d5a0e0c3-avatar-rerelease.rsquare.w700.jpg"
        alt=""
      />
      post 1
      <div>
        <span>Like</span>
      </div>
    </div>
  );
};
export default Post;
