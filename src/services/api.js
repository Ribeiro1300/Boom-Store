import axios from "axios";

const API = axios.create({
  baseURL: "https://testeboomstore.herokuapp.com",
});

export default API;
