import axios from 'axios';
import { tokenStore } from "../Utils/storage";

axios.interceptors.request.use(
  (async (options) => {
    const config = options;
    config.headers.Authorization = `Bearer ${await tokenStore.getItem('TOKEN')}`;
    config.baseURL = process.env.REACT_APP_BASE_URL;
    return config;
  }),
  ((error) => Promise.reject(error))
);
const API = {
  GET: axios.get,
  POST: axios.post,
  PUT: axios.put,
  DELETE: axios.delete,
  PATCH: axios.patch
};
export default API;
