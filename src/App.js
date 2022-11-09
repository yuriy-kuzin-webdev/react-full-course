import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Dialogs from "./components/Dialogs/Dialogs";
import Header from "./components/Header/Header";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

class App extends Component {
  render() {
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
              <Route path="/profile" element={<Profile />} />
              <Route path="/dialogs" element={<Dialogs />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
