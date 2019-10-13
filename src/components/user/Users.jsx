import React from "react";
import UserItem from "./UserItem";
import PropTypes from "prop-types";

const Users = props => {
  if (props.loading) {
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
      {props.users.map(user => (
        <div className="col-md-4 mb-3" key={user.id}>
          <UserItem user={user} />
        </div>
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

export default Users;
