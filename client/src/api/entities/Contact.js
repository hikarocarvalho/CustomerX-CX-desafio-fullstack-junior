import ApiCrud from "../ApiCrud";

const Contact = {
  endPoint: "contact",
  createContact: (data) => ApiCrud(Contact.endPoint).create(Contact.endPoint, data),
  getContacts: (idCustomer) => ApiCrud(Contact.endPoint).getById(Contact.endPoint+"/customer",idCustomer),
  getContact: (id) => ApiCrud(Contact.endPoint).getById(Contact.endPoint, id),
  updateContact: (id, data) =>
    ApiCrud(Contact.endPoint).update(Contact.endPoint, data, id),
  deleteContact: (id) => ApiCrud(Contact.endPoint).delete(Contact.endPoint, id),
};

export default Contact;