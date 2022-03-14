import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
        </div>
      </div>
    );
  }
}

export default App;
