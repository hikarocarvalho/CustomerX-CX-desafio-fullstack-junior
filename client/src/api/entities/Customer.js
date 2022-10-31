import ApiCrud from "../ApiCrud";

const Customer = {
  endPoint: "customer",
  createCustomer: (data) => ApiCrud(Customer.endPoint).createAuthenticated(Customer.endPoint, data),
  getCustomers: () => ApiCrud(Customer.endPoint).getAll(Customer.endPoint),
  getCustomer: (id) => ApiCrud(Customer.endPoint).getById(Customer.endPoint, id),
  updateCustomer: (id, data) =>
    ApiCrud(Customer.endPoint).update(Customer.endPoint, data, id),
  deleteCustomer: (id) => ApiCrud(Customer.endPoint).delete(Customer.endPoint, id),
};

export default Customer;
