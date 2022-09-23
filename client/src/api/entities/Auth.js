import { toast } from "react-toastify";
import ApiConfig from "../ApiConfig";

const Auth = {
  endPoint: "auth",
  login: (data) =>
    ApiConfig.withOutAutenticate()
      .post(Auth.endPoint, data)
      .then((response) => {
        toast("Welcome!");
        return response;
      })
      .catch((error) => toast("User not found!")),
  authenticate: () =>
    ApiConfig.withAutenticate()
      .get(Auth.endPoint)
      .then((response) => true)
      .catch((error) => false),
};

export default Auth;
