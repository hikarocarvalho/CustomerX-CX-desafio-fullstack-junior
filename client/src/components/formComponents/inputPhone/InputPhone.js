import { useState, useEffect } from "react";
import setPhoneFormat from "../../../scripts/validations/setPhoneFormat";
import Fieldset from "../fieldSet/Fieldset";
import Button from "../button/Button";
import "./InputPhone.css";
import Input from "../input/Input";

export default function InputPhone() {
  const [newPhone, setNewPhone] = useState({ phones: ["inputPhone1"] });

  const addNewPhone = (event) => {
    event.preventDefault();
    let phone = newPhone.phones;
    phone.push("inputPhone" + (newPhone.phones.length + 1));
    setNewPhone({
      ...newPhone,
      phones: phone,
    });
  };

  useEffect(() => {}, []);
  return (
    <Fieldset fieldsetTitle={"Registrar Telefones"} className="container-ext">
      <Fieldset fieldsetTitle={"Telefones"} className="container" name="phones">
        {newPhone.phones.length !== 0
          ? newPhone.phones.map((phone, index) => (
              <article key={index}>
                <Input description={"Telefone " + (index+1)} id={phone} onChange={setPhoneFormat}/>
              </article>
            ))
          : ""}
      </Fieldset>

      <Button value={"+"} onClick={addNewPhone}></Button>
    </Fieldset>
  );
}
