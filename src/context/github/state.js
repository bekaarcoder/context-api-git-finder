import React, { useReducer } from "react";
import axios from "axios";
import GithubContext from "./context";
import GithubReducer from "./reducer";

import {
  SEARCH_USERS,
  SET_LOADING,
  GET_USER,
  CLEAR_USER,
  FETCH_USERS,
} from "../types";

const GithubState = (props) => {
  const initialState = {
    users: [],
    user: {},
    loading: false,
  };

  const [state, dispatch] = useReducer(GithubReducer, initialState);

  // Initial - Fetch Users
  const fetchUsers = async () => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/users?client_id=${process.env.APP_CLIENT_ID}&client_secret=${process.env.APP_CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data,
    });
  };

  // Search Users
  const searchUser = async (username) => {
    setLoading();

    const res = await axios.get(
      `https://api.github.com/search/users?q=${username}&client_id=${process.env.APP_CLIENT_ID}&client_secret=${process.env.APP_CLIENT_SECRET}`
    );

    dispatch({
      type: SEARCH_USERS,
      payload: res.data.items,
    });
  };

  // Get User Details
  const getUserDetails = async (username) => {
    setLoading();

    const res = await axios.get(
      `http://api.github.com/users/${username}?client_id=${process.env.APP_CLIENT_ID}&client_secret=${process.env.APP_CLIENT_SECRET}`
    );

    dispatch({
      type: GET_USER,
      payload: res.data,
    });
  };

  // Clear User
  const clearUser = () => {
    dispatch({
      type: CLEAR_USER,
    });
  };

  // Set Loading
  const setLoading = () =>
    dispatch({
      type: SET_LOADING,
    });

  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        user: state.user,
        loading: state.loading,
        searchUser: searchUser,
        fetchUsers: fetchUsers,
        getUserDetails: getUserDetails,
        clearUser: clearUser,
      }}
    >
      {props.children}
    </GithubContext.Provider>
  );
};

export default GithubState;
