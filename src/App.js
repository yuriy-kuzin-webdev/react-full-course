import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { DialogsContainer } from "./components/Dialogs/DialogsContainer";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

const App = (props) => {
  return (
    <Router>
      <div className="app-wrapper">
        {/* header */}
        <Header />

        {/* nav */}
        <Nav />

        {/* main content */}
        <div className="app-wrapper-content">
          <Routes>
            <Route
              path="/dialogs/*"
              element={
                <DialogsContainer
                  dispatch={props.dispatch}
                  dialogsPage={props.state.dialogsReducer}
                />
              }
            />
            <Route
              path="/profile"
              element={
                <Profile
                  profilePage={props.store.getState().profileReducer}
                  dispatch={props.dispatch}
                />
              }
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
