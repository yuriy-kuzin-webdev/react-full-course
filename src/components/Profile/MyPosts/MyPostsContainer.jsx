import React from "react";
import { addPostActionCreator, updateNewPostTextActionCreator } from "../../../redux/reducers/profile-reducer";
import MyPosts from "./MyPosts";

export const MyPostsContainer = ({ dispatch,posts,newPostText }) => {

  const addPost = () => {
    dispatch(addPostActionCreator())
  };

  const onPostChange = (text) => {
    dispatch(updateNewPostTextActionCreator(text));
  };

  return <MyPosts updateNewPostText={onPostChange} addPost={addPost} posts={posts} newPostText={newPostText}/>;
};
