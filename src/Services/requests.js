import jwt from "jsonwebtoken";
import API from "./coreAPI";
import { tokenStore } from "../Utils/storage";

export const getAllPosts = async() => {
  return await API.GET('/api/posts')
  .then((response) => response.data)
  .then((data) => data);
};

export const addPost = async(params) => {
  return await API.POST('/api/posts', params)
  .then((response) => response)
  .catch((e) => console.log(e));
};

export const fetchUserData = async(id) => {
  return await API.GET(`/api/user/${id}`)
  .then((response) => response.data)
  .then((data) => {
    return data
  });
}

export const signin = async (params) => {
  const response = await API.POST('/api/users/login', params);
  if(response.status == 200){
    jwt.verify(response.data.token, process.env.REACT_APP_JWT_SECRET, (err, decoded) => {
      if (err) return console.log(err);
      tokenStore.setItem('TOKEN', response.data.token);
    });
    return response.data.user[0];
  }
  return console.log(response);
}

export const signup = async (params) => {
  return await API.POST('/api/users/signup', params).then((response) => {
    return response;
    }).catch((error) => {
    return console.log('RESPONSE', error);
  })
}

export const signout = async () => (
  await tokenStore.removeItem('TOKEN')
);