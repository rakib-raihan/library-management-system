import React, { Component } from "react";
import NavGenerator from "../module/NavGenerator";
import AdminNav from "../data/AdminNav";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top">
          <Link to="/dashboard/overview" className="navbar-brand">
            Smart Library
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#headerNav"
            aria-controls="headerNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="headerNav">
            <ul className="nav navbar-nav flex-column sidebar__nav d-md-none">
              {NavGenerator(AdminNav)}
            </ul>
            <div className="dropdown-divider d-md-none mt-4 mb-2"></div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a className="nav-link" href="#" data-toggle="dropdown">
                  <i className="bx bx-bell"></i> Notifications
                </a>
                <div
                  className="dropdown-menu animate__animated animate__fadeInDown animate__faster"
                  aria-labelledby="userDropdown"
                >
                  <a className="dropdown-item"> You are all caught up!</a>
                </div>
              </li>
              <li className="nav-item">
                <Link to="/dashboard/profile" className="nav-link">
                  <i className="bx bx-user"></i> Profile
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  <i className="bx bx-exit"></i> Log out
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
