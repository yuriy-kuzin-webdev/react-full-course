import React, { useRef } from "react";
import classes from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = (props) => {
  const postRef = useRef();

  const addPost = () => {
    props.dispatch({
      type:'ADD-POST'
    });
  };
  const onPostChange = () => {
    props.dispatch({
      type:'UPDATE-NEW-POST-TEXT',
      text: postRef.current.value
    });
  };

  return (
    <div className={classes.postBlock}>
      <h3>my posts</h3>
      <div>
        <div>
          <textarea
            ref={postRef}
            onChange={onPostChange}
            value={props.newPostText}
          />
        </div>
        <div>
          <button onClick={addPost}>Add post</button>
        </div>
      </div>
      <div className={classes.posts}>
        {props.posts.map(p => <Post message={p.message} likesCount={p.likesCount} key={p.id} />)}
      </div>
    </div>
  );
};
export default MyPosts;
