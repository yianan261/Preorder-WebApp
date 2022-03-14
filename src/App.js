import "./App.css";
import React, { Component } from "react";
import Navbar from "./Components/Navbar";
import CheckOutCard from "./Components/CheckOutCard";
import MaskPageView from "./Components/MaskPageView";
import { Link } from "react-router-dom";

export class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <Navbar />
          <MaskPageView />
          <Link to="/RegisterUser">Register User</Link>
          <Link to="/">Home</Link>
          <CheckOutCard />
        </div>
      </div>
    );
  }
}

export default App;
