import { createContext, useState, useContext } from "react";
import React, { useReducer } from "react";
import githubReducer from "./GithubReducer";

const GithubContext = createContext();

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL;
const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export const GithubProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(true); // 시작시 깃허브에서 데이터들을 가져옴(작업중true)

  const initialState = {
    users: [],
    loading: false, // 로딩상태 false
  };
  const [state, dispatch] = useReducer(githubReducer, initialState);

  const searchUsers = async (text) => {
    setLoading(); // loading상태를 true로 업데이트
    const params = new URLSearchParams({
      q: text,
    });

    const response = await fetch(`${GITHUB_URL}/search/users?${params}`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const { items } = await response.json(); //  data 객체를 분해(destructure)해서 그 안의 items만 가져온다

    // setUsers(data);
    // setLoading(false); // 데이터 로딩완료
    dispatch({
      type: "GET_USERS",
      payload: items,
    });
  };
  //로딩상태를 true로 업데이트하기 위한 dispatch
  const setLoading = () =>
    dispatch({
      type: "SET_LOADING",
    });

  const clearUsers = () =>
    dispatch({
      type: "CLEAR_USERS",
    });
  return (
    <GithubContext.Provider
      value={{
        users: state.users,
        loading: state.loading,
        searchUsers,
        clearUsers,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
