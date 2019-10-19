import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const UserItem = props => {
  const { login, avatar_url } = props.user;
  return (
    <div className="card text-center">
      <div className="card-body">
        <img
          src={avatar_url}
          alt={login}
          className="rounded-circle"
          style={{ width: "100px" }}
        />
        <h3>{login}</h3>
        <Link to={`/user/${login}`} className="btn btn-sm btn-dark">
          Go to profile
        </Link>
      </div>
    </div>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired
};

export default UserItem;
