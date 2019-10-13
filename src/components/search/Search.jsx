import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="row mt-4">
        <div className="col-md-12">
          <h3 className="mb-3">Search Github User</h3>
          <form className="form-inline">
            <label className="sr-only">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="form-control mb-2 mr-sm-2"
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
