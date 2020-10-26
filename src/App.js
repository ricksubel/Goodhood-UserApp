import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

import CreatePosts from "./components/Posts/Create-Posts";
import EditPosts from "./components/Posts/Edit-Posts";
import Posts from "./components/Posts/Posts";
import Navbar from "./components/Navbar/Navbar";

// import logo from "./logo.png";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Navbar />
          <br/>
          <h2>Welcome to Goodhood!</h2>
        </div>
      </Router>
    );
  }
}

export default App;

