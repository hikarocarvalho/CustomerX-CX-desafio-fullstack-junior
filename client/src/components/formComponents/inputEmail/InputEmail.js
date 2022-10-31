import { useState, useEffect } from "react";
import emailValidate from "../../../scripts/validations/emailValidate";
import Fieldset from "../fieldSet/Fieldset";
import Button from "../button/Button";
import "./InputEmail.css";
import Input from "../input/Input";

export default function InputEmail() {
  const [newEmail, setNewEmail] = useState({ emails: ["inputEmail1"] });

  const addNewEmail = (event) => {
    event.preventDefault();
    let email = newEmail.emails;
    email.push("inputEmail" + (newEmail.emails.length + 1));
    setNewEmail({
      ...newEmail,
      emails: email,
    });
    console.log(newEmail.emails.length);
  };

  useEffect(() => {}, []);
  return (
    <Fieldset fieldsetTitle={"Registrar Emails"} className="container-ext">
      <Fieldset fieldsetTitle={"E-mails"} className="container" name="mails">
        {newEmail.emails.length !== 0
          ? newEmail.emails.map((email, index) => (
              <article key={index}>
                <Input description={"E-Mail " + (index+1)} id={email} onChange={emailValidate} />
              </article>
            ))
          : ""}
      </Fieldset>
      <Button value={"+"} onClick={addNewEmail}></Button>
    </Fieldset>
  );
}
