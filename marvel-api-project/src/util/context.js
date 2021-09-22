import React, { useReducer, useContext, useEffect } from "react";
import { reducer } from "./reducer";
const API_ENDPOINT = `https://gateway.marvel.com:443/v1/public/characters?`;

const initialState = {
  loading: true,
  total: 0,
  count: 0,
  results: [],
  query: "",
};

const AppContext = React.createContext();

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchWidget = async (url) => {
    dispatch({type: "SET_LOADING"});
    try {
      const response = await fetch(url);
      // console.log(response.json());
      const data = await response.json(); //Error here
      dispatch({ type: "SET_RESULTS", payload: data });
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (query) => {
    dispatch({type: "HANDLE_SEARCH", payload: query})
  }

  useEffect(() => {
    fetchWidget(
      `${API_ENDPOINT}&ts=1234&apikey=ab0606db0d69c84420a488364f11fee1&hash=9f5733bebb8bd43ee82a5b7a03129ae7`
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
