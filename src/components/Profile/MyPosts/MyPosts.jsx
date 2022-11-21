import React, { useRef } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = ({posts,updateNewPostText,addPost,newPostText}) => {
  const postRef = useRef();

  const onAddPost = () => {
    addPost()
  };
  const onPostChange = () => {
    updateNewPostText(postRef.current.value);
  };

  return (
    <div className={classes.postBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea
            ref={postRef}
            onChange={onPostChange}
            value={newPostText}
          />
        </div>
        <div>
          <button onClick={onAddPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {posts.map((p) => (
          <Post message={p.message} likesCount={p.likesCount} key={p.id} />
        ))}
      </div>
    </div>
  );
};
export default MyPosts;
