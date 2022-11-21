const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";

const initialState = {
  posts: [
    { id: 1, message: "Hi how are you 1", likesCount: 12 },
    { id: 2, message: "Hi how are you 2", likesCount: 122 },
    { id: 3, message: "Hi how are you 3", likesCount: 123 },
    { id: 4, message: "Hi how are you 4", likesCount: 124 },
  ],
  newPostText: "learning react-redux",
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      const post = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      state.posts.push(post);
      state.newPostText = "";

      return state;

    case UPDATE_NEW_POST_TEXT:
      state.newPostText = action.newText;

      return state;

    default:
      return state;
  }
};

export default profileReducer;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});
