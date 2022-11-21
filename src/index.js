import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import store from "./redux/store";
import reduxStore from "./redux/redux-store";

const root = ReactDOM.createRoot(document.getElementById("root"));
const rerenderEntireTree = (state) => {
  root.render(
    <App
      state={state}
      dispatch={reduxStore.dispatch.bind(reduxStore)}
      store={reduxStore}
    />
  );
};
rerenderEntireTree(reduxStore.getState());
reduxStore.subscribe(() => {
  const state = reduxStore.getState();
  rerenderEntireTree(state);
});
