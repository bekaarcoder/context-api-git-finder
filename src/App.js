import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import Navbar from "./components/layout/Navbar";
import Users from "./components/user/Users";
import Search from "./components/search/Search";

class App extends Component {
  state = {
    users: [],
    loading: false
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

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUser={this.searchUser} />
          <Users loading={this.state.loading} users={this.state.users} />
        </div>
      </div>
    );
  }
}

export default App;
