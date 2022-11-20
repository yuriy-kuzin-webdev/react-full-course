let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi how are you 1", likesCount: 12 },
        { id: 2, message: "Hi how are you 2", likesCount: 122 },
        { id: 3, message: "Hi how are you 3", likesCount: 123 },
        { id: 4, message: "Hi how are you 4", likesCount: 124 },
      ],
      newPostText: "learning react-redux",
    },
    dialogsPage: {
      dialogs: [
        { id: 1, name: "Andrew" },
        { id: 2, name: "Antony" },
        { id: 3, name: "Rebecca" },
        { id: 4, name: "Dorotha" },
      ],
      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "Hey" },
        { id: 3, message: "Hola" },
      ],
    },
  },
  getState() {
    return this._state;
  },
  _callSubsciber() {
    console.log("state changed");
  },
  _addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubsciber(this._state);
  },
  _updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubsciber(this._state);
  },
  subscribe(observer) {
    this._callSubsciber = observer;
  },
  dispatch(action) {
    if (action.type === "ADD-POST") {
      this._addPost();
    } else if (action.type === "UPDATE-NEW-POST-TEXT") {
      this._updateNewPostText(action.text);
    }
  },
};
window.store = store;
export default store;
