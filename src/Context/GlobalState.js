import React, { createContext, useReducer, useEffect } from 'react';
import jwt from "jsonwebtoken";
import Reducer from './Reducer';
import { tokenStore } from '../Utils/storage';
import { fetchUserData } from "../Services/requests";

const initialState = {
  posts: [],
  filteredPosts: [],
  filterPostsBy: '',
  currentUser: null,
  user: null,
  userTourist: null,
  userGuide: null,
  loading: false,
  error: null
};

export const GlobalContext = createContext(initialState);

export const GlobalContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  useEffect(() => {
    dispatch({ type: 'START' });
    tokenStore.getItem('TOKEN')
    .then((token) => {
      fetchUserData(jwt.decode(token)[0].id)
    .then((payload) => {
      dispatch({ type: 'FETCH_CURRENT_USER', payload });
      dispatch({ type: 'COMPLETE' });
      })
    }).catch((error) => console.log(error));  
  }, []);

  return (
    <GlobalContext.Provider value={[state, dispatch]}>
      {children}
    </GlobalContext.Provider>
  );
};
