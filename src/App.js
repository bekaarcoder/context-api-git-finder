import React, { Fragment, useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Search from "./components/search/Search";
import About from "./components/pages/About";
import User from "./components/user/User";
import GithubState from "./context/github/state";
import GithubContext from "./context/github/context";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  const clearUser = () => {
    setUsers([]);
    setLoading(false);
  };

  return (
    <GithubState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route path="/about" exact component={About} />
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search clearUser={clearUser} />
                    <Users />
                  </Fragment>
                )}
              />
              <Route
                path="/user/:username"
                render={(props) => <User {...props} />}
              />
            </Switch>
          </div>
        </div>
      </Router>
    </GithubState>
  );
};

export default App;
