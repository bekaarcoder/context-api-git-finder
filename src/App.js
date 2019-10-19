import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Search from "./components/search/Search";
import About from "./components/pages/About";
import User from "./components/user/User";

class App extends Component {
  state = {
    users: [],
    loading: false,
    user: {}
  };

  async componentDidMount() {
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.APP_CLIENT_ID}&client_secret=${process.env.APP_CLIENT_SECRET}`
    );
    this.setState({
      users: res.data,
      loading: false
    });
  }

  searchUser = async username => {
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.APP_CLIENT_ID}&client_secret=${process.env.APP_CLIENT_SECRET}`
    );
    console.log(res.data.items);
    this.setState({
      users: res.data.items,
      loading: false
    });
  };

  getUserDetails = async username => {
    this.setState({
      loading: true
    });
    const res = await axios.get(
      `http://api.github.com/users/${username}?client_id=${process.env.APP_CLIENT_ID}&client_secret=${process.env.APP_CLIENT_SECRET}`
    );
    this.setState({
      loading: false,
      user: res.data
    });
  };

  clearUser = () => {
    this.setState({
      users: [],
      loading: false
    });
  };

  render() {
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
                    <Search
                      searchUser={this.searchUser}
                      clearUser={this.clearUser}
                    />
                    <Users
                      loading={this.state.loading}
                      users={this.state.users}
                    />
                  </Fragment>
                )}
              />
              <Route
                path="/user/:username"
                render={props => (
                  <User
                    {...props}
                    getUserDetails={this.getUserDetails}
                    loading={this.state.loading}
                    user={this.state.user}
                  />
                )}
              />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
