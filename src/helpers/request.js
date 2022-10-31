import axios from "axios";

const client = axios.create({
  baseURL: "http://localhost:5000",
});

const request = (options) => {
  const authToken = localStorage.getItem("authToken");
  client.defaults.headers.common["Authorization"] = authToken;
  return client(options);
};

export default request;
