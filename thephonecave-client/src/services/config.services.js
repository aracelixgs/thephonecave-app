import axios from "axios";

//all calls to BE will be from here
const service = axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
});



export default service;
