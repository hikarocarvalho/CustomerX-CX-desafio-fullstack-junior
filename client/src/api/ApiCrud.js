import ApiConfig from "./ApiConfig";
import { toast } from "react-toastify";

const ApiCrud = (entityName) => ({
  create: (url, data) =>
    ApiConfig.withOutAutenticate()
      .post(url, data)
      .then((response) => {
        toast(`Now you create the ${entityName}!`);
        return response.status;
      })
      .catch((error) => {
        if (error.response.status === 422) {
          toast(`Error to create. The ${entityName} already exists!`);
        } else {
          toast(`Error to create the ${entityName}!`);
        }

        return error.response.status;
      }),
  getById: (url, id) => ApiConfig.withAutenticate().get(url + "/" + id),
  getAll: (url) => ApiConfig.withAutenticate().get(url),
  update: (url, data, id) =>
    ApiConfig.withAutenticate()
      .patch(url + "/" + id, data)
      .then((response) => {
        toast(`Now you have updated the ${entityName}!`);
        return response;
      })
      .catch((error) => {
        toast(`Error to update the ${entityName}!`);
        return error;
      }),
  delete: (url, id) =>
    ApiConfig.withAutenticate()
      .delete(url + "/" + id)
      .then((response) => {
        toast(`Now you have deleted the ${entityName}!`);
        return response;
      })
      .catch((error) => {
        toast(`Error to delete the ${entityName}!`);
        return error;
      }),
});

export default ApiCrud;
