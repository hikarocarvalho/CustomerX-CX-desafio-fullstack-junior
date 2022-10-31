import ApiCrud from "../ApiCrud";

const Phone = {
  endPoint: "phone",
  createPhone: (data) => ApiCrud(Phone.endPoint).createAuthenticated(Phone.endPoint, data),
  getPhones: () => ApiCrud(Phone.endPoint).getAll(Phone.endPoint),
  getPhone: (id) => ApiCrud(Phone.endPoint).getById(Phone.endPoint, id),
  updatePhone: (id, data) =>
    ApiCrud(Phone.endPoint).update(Phone.endPoint, data, id),
  deletePhone: (id) => ApiCrud(Phone.endPoint).delete(Phone.endPoint, id),
};

export default Phone;
