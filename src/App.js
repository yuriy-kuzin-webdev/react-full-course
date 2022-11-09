import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Profile from "./components/Profile";

class App extends Component {
  render() {
    return (
      <div className="app-wrapper">
        {/* header */}
        <Header/>

        {/* nav */}
        <Nav/>

        {/* main content */}
        <Profile/>
      </div>
    );
  }
}

export default App;
