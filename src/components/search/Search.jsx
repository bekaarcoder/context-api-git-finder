import React, { useContext, useState } from "react";
import GithubContext from "../../context/github/context";

const Search = () => {
  const githubContext = useContext(GithubContext);

  const [username, setUsername] = useState("");
  const [error, setError] = useState("");

  const onChange = (e) => {
    setUsername(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username === "") {
      setError("Please enter something.");
    } else {
      githubContext.searchUser(username);
      setUsername("");
      setError("");
    }
  };

  const handleClearUser = () => {
    githubContext.clearUser();
  };

  return (
    <div className="row mt-4">
      <div className="col-md-12">
        <h3 className="mb-3">Search Github User</h3>
        <form className="form-row" onSubmit={onSubmit}>
          <div className="col-md-4 mb-3">
            <label className="sr-only">Username</label>
            <input
              type="text"
              name="username"
              placeholder="Username"
              className={`form-control mb-2 mr-sm-2 ${error && "is-invalid"}`}
              onChange={onChange}
              value={username}
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
              onClick={handleClearUser}
            >
              Clear Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Search;
