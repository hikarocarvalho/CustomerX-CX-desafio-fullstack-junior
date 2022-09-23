import ApiCrud from "../ApiCrud";

const Mail = {
  endPoint: "mail",
  createMail: (data) => ApiCrud(Mail.endPoint).create(Mail.endPoint, data),
  getMails: () => ApiCrud(Mail.endPoint).getAll(Mail.endPoint),
  getMail: (id) => ApiCrud(Mail.endPoint).getById(Mail.endPoint, id),
  updateMail: (id, data) =>
    ApiCrud(Mail.endPoint).update(Mail.endPoint, data, id),
  deleteMail: (id) => ApiCrud(Mail.endPoint).delete(Mail.endPoint, id),
};

export default Mail;
