import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      my posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message='Hi, how are you' likesCount='23'/>
        <Post message='It is my first post' likesCount='0'/>
        <Post/>
      </div>
    </div>
  );
};
export default MyPosts;
