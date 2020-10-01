import React, { Component } from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";

class Body extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="flex-xl-nowrap row">
          <Sidebar />
          <Content />
        </div>
      </div>
    );
  }
}

export default Body;
