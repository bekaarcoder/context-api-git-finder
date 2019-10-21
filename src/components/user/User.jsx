import React, { useEffect } from "react";

const User = ({ user, loading, getUserDetails, match }) => {
  useEffect(() => {
    getUserDetails(match.params.username);
    // eslint-disable-next-line
  }, []);

  const {
    name,
    avatar_url,
    login,
    bio,
    public_repos,
    followers,
    following,
    html_url
  } = user;
  if (loading) {
    return (
      <div className="row mt-3">
        <div className="col-md-12">
          <p className="text-center">Loading user...</p>
        </div>
      </div>
    );
  }
  return (
    <div className="row mt-3">
      <div className="col-md-12">
        <div className="card text-center">
          <div className="card-body">
            <img
              src={avatar_url}
              style={{ width: "150px" }}
              className="rounded-circle"
              alt={login}
            />
            <h3 className="mt-2">{name}</h3>
            <p>{bio}</p>
            <div>
              <span className="badge badge-success">
                Followers: {followers}
              </span>
              <span className="badge badge-primary ml-2">
                Following: {following}
              </span>
              <span className="badge badge-info ml-2">
                Repos: {public_repos}
              </span>
            </div>
            <a
              href={html_url}
              className="btn btn-light mt-3"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Github Profile
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
