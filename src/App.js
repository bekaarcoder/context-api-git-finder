import React, { Fragment, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Search from "./components/search/Search";
import About from "./components/pages/About";
import User from "./components/user/User";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    setLoading(true);
    async function fetchUsers() {
      const res = await axios.get(
        `https://api.github.com/users?client_id=${process.env.APP_CLIENT_ID}&client_secret=${process.env.APP_CLIENT_SECRET}`
      );
      console.log(res.data);
      setLoading(false);
      setUsers(res.data);
    }
    fetchUsers();
  }, []);

  const searchUser = async username => {
    setLoading(true);
    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.APP_CLIENT_ID}&client_secret=${process.env.APP_CLIENT_SECRET}`
    );
    console.log(res.data.items);
    setUsers(res.data.items);
    setLoading(false);
  };

  const getUserDetails = async username => {
    setLoading(true);
    const res = await axios.get(
      `http://api.github.com/users/${username}?client_id=${process.env.APP_CLIENT_ID}&client_secret=${process.env.APP_CLIENT_SECRET}`
    );
    setLoading(false);
    setUser(res.data);
  };

  const clearUser = () => {
    setUsers([]);
    setLoading(false);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/about" exact component={About} />
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <Search searchUser={searchUser} clearUser={clearUser} />
                  <Users loading={loading} users={users} />
                </Fragment>
              )}
            />
            <Route
              path="/user/:username"
              render={props => (
                <User
                  {...props}
                  getUserDetails={getUserDetails}
                  loading={loading}
                  user={user}
                />
              )}
            />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
