import React, { Component } from "react";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        {/* header */}
        <Header />

        {/* nav */}
        <Nav />

        {/* main content */}
        {/* <Profile/> */}
        <div className="app-wrapper-content">
          <Dialogs />
        </div>
      </div>
    );
  }
}

export default App;
