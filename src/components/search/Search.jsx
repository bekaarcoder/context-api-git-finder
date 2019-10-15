import React, { Component } from "react";

class Search extends Component {
  state = {
    username: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.searchUser(this.state.username);
    this.setState({
      username: ""
    });
  };

  render() {
    return (
      <div className="row mt-4">
        <div className="col-md-12">
          <h3 className="mb-3">Search Github User</h3>
          <form className="form-inline" onSubmit={this.onSubmit}>
            <label className="sr-only">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-control mb-2 mr-sm-2"
              onChange={this.onChange}
              value={this.state.username}
            />

            <button type="submit" className="btn btn-dark mb-2">
              Search
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
