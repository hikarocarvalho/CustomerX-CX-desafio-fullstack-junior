import axios from "axios";

const ApiConfig = {
  instance: axios.create({
    baseURL: "http://localhost:3001/",
    responseType: "json",
  }),
  // use with authenticate routes
  withAutenticate: () => {
    ApiConfig.instance.defaults.headers.common["Authorization"] =
      "Bearer " + localStorage.getItem("auth");
    return ApiConfig.instance;
  },
  // use with not authenticate routes
  withOutAutenticate: () => {
    ApiConfig.instance.defaults.headers.common["Authorization"] = undefined;
    return ApiConfig.instance;
  },
};

export default ApiConfig;
