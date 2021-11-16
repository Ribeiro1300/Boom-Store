/* eslint-disable no-undef */
import axios from "axios";

const API = axios.create({
  //baseURL: process.env.REACT_APP_BASE_URL,
  //baseURL: "https://projeto-15-boom-store.herokuapp.com",
  baseURL: "http://localhost:4021/",
});

export default API;
