import React from "react";
import PropTypes from "prop-types";

const Navbar = props => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        {props.title}
      </a>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

Navbar.defaultProps = {
  title: "GithubFinder"
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired
};

export default Navbar;
