import React, { useReducer, useContext, useEffect } from "react";
import { reducer } from "./reducer";
const API_ENDPOINT = `https://gateway.marvel.com:443/v1/public/characters?`;

const initialState = {
  loading: true,
  limit: 0,
  total: 0,
  count: 0,
  results: [],
  query: "hawkeye",
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // All the other stuff

  const fetchWidget = async (url) => {
    dispatch("SET_LOADING");
    try {
      const response = await fetch(url);
      const data = await response.json();
      dispatch({ type: "SET_RESULTS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    dispatch({type: "HANDLE_SEARCH", payload: query})
  }

  // All the other stuff
  useEffect(() => {
    fetchWidget(
      `${API_ENDPOINT}name=${state.query}&apikey=ab0606db0d69c84420a488364f11fee1`
    );
  }, [state.query]);

  return (
    <AppContext.Provider value={{ ...state, handleSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
