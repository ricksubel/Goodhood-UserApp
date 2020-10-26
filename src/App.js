import React from "react";
import Routes from './config/Routes';
import Navbar from "./components/Navbar/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";


function App() {

    return (
        <div className="container">
          <Navbar />
          <h2>Welcome to Goodhood!</h2>
          <Routes />
        </div>
    );

}

export default App;

