import React, { Component } from "react";

class Search extends Component {
  state = {
    username: "",
    error: ""
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    if (this.state.username == "") {
      this.setState({
        error: "Please enter something"
      });
    } else {
      this.props.searchUser(this.state.username);
      this.setState({
        username: "",
        error: ""
      });
    }
  };

  render() {
    return (
      <div className="row mt-4">
        <div className="col-md-12">
          <h3 className="mb-3">Search Github User</h3>
          <form className="form-row" onSubmit={this.onSubmit}>
            <div className="col-md-4 mb-3">
              <label className="sr-only">Username</label>
              <input
                type="text"
                name="username"
                placeholder="Username"
                className={`form-control mb-2 mr-sm-2 ${this.state.error &&
                  "is-invalid"}`}
                onChange={this.onChange}
                value={this.state.username}
              />
              <div className="invalid-feedback">Please enter something.</div>
            </div>
            <div className="col-md-8 mb-3">
              <button type="submit" className="btn btn-dark mb-2 mr-sm-2">
                Search
              </button>

              <button
                type="button"
                className="btn btn-danger mb-2"
                onClick={this.props.clearUser}
              >
                Clear Search
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Search;
