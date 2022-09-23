import ApiCrud from "../ApiCrud";

const User = {
  endPoint: "user",
  createUser: (data) => ApiCrud(User.endPoint).create(User.endPoint, data),
  getUsers: () => ApiCrud(User.endPoint).getAll(User.endPoint),
  getUser: (id) => ApiCrud(User.endPoint).getById(User.endPoint, id),
  updateUser: (id, data) =>
    ApiCrud(User.endPoint).update(User.endPoint, data, id),
  deleteUser: (id) => ApiCrud(User.endPoint).delete(User.endPoint, id),
};

export default User;
