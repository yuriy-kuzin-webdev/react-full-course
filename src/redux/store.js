const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE-BODY";
const SEND_MESSAGE = "SEND-MESSAGE";

const store = {
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
      newMessageBody: "",
    },
  },
  getState() {
    return this._state;
  },
  _callSubsciber() {
    console.log("state changed");
  },
  _addPost() {
    const newPost = {
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
    if (action.type === ADD_POST) {
      this._addPost();
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._updateNewPostText(action.text);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubsciber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      const body = this._state.dialogsPage.newMessageBody;
      this._state.dialogsPage.newMessageBody = "";
      this._state.dialogsPage.messages.push({ id: 6, message: body });
      this._callSubsciber(this._state);
    }
  },
};
window.store = store;
export default store;

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  text: text,
});
export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyActionCreator = (body) => ({
  type: UPDATE_NEW_MESSAGE_BODY,
  body: body,
});
