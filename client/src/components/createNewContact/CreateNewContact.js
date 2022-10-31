import { useContext } from "react";
import { ModalContext } from "../../App.js";
import Contact from "../../api/entities/Contact.js";
import Form from "../formComponents/form/Form";
import Input from "../formComponents/input/Input";
import InputPhone from "../formComponents/inputPhone/InputPhone";
import InputEmail from "../formComponents/inputEmail/InputEmail";
import Button from "../formComponents/button/Button";
import "./CreateNewContact.css";

export default function CreateNewContact(props) {
  const { modalView, setModalView } = useContext(ModalContext);

  const newContact = (event) => {
    event.preventDefault();

    let contactPreload = {
      customerId:parseInt(props.idCustomer),
      complete_name: "",
      mails: [],
      phones: [],
    };

    contactPreload.complete_name = event.target.inputCompleteName.value;

    let countChildren = event.target.phones.children.length;
    for (let count = 1; count < countChildren; count++) {
      contactPreload.phones.push({
        phone: event.target["inputPhone" + count].value,
      });
    }

    countChildren = event.target.mails.children.length;
    for (let count = 1; count < countChildren; count++) {
      contactPreload.mails.push({
        email: event.target["inputEmail" + count].value,
      });
    }
    Contact.createContact(contactPreload);
    cancel(event);
  };

  const cancel = (event) => {
    event.preventDefault();
    setModalView({
      ...modalView,
      view: false,
      children: <></>,
    });
  };

  return (
    <Form
      onSubmit={newContact}
      className="new-contact"
      formTitle={props.id ? "Editar Contato" : "Registrar Novo Contato"}
    >
      <Input description={"Nome Completo"} id={"inputCompleteName"} />
      <article className="contact-information">
        <InputPhone></InputPhone>
        <InputEmail></InputEmail>
      </article>
      <article className="action-buttons">
        <Button value={props.id ? "Editar" : "Registrar"} />
        <Button value="Cancelar" onClick={cancel} />
      </article>
    </Form>
  );
}
