import axios from "axios";
axios.defaults.timeout = 10000;

export default axios.create({
  baseURL: "http://localhost:3000",
});
