import React, { useContext, useEffect } from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";
import GithubContext from "../../context/github/context";

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users } = githubContext;

  useEffect(() => {
    githubContext.fetchUsers();
    // eslint-disable-next-line
  }, []);

  if (loading) {
    return (
      <div className="row mt-4">
        <div className="col-md-12">
          <p className="text-center">Loading users...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="row mt-4">
      {users.map((user) => (
        <div className="col-md-4 mb-3" key={user.id}>
          <UserItem user={user} />
        </div>
      ))}
    </div>
  );
};

export default Users;
