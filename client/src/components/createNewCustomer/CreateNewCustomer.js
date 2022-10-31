import { useContext } from "react";
import { ModalContext } from "../../App.js";
import Customer from "../../api/entities/Customer.js";
import Form from "../formComponents/form/Form";
import Input from "../formComponents/input/Input";
import InputPhone from "../formComponents/inputPhone/InputPhone";
import InputEmail from "../formComponents/inputEmail/InputEmail";
import Button from "../formComponents/button/Button";
import "./CreateNewCustomer.css";

export default function CreateNewCustomer(props) {
  const { modalView, setModalView } = useContext(ModalContext);

  const newCustomer = (event) => {
    event.preventDefault();

    let customerPreload = {
      complete_name: "",
      mails: [],
      phones: [],
    };

    customerPreload.complete_name = event.target.inputCompleteName.value;

    let countChildren = event.target.phones.children.length;
    for (let count = 1; count < countChildren; count++) {
      customerPreload.phones.push({
        phone: event.target["inputPhone" + count].value,
      });
    }

    countChildren = event.target.mails.children.length;
    for (let count = 1; count < countChildren; count++) {
      customerPreload.mails.push({
        email: event.target["inputEmail" + count].value,
      });
    }
    Customer.createCustomer(customerPreload);
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
      onSubmit={newCustomer}
      className="new-customer"
      formTitle={props.id ? "Editar Cliente" : "Registrar Novo Cliente"}
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
