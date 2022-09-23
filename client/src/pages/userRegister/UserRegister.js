import Form from "./../../components/formComponents/form/Form";
import Input from "./../../components/formComponents/input/Input";
import Button from "./../../components/formComponents/button/Button";
import User from "../../api/entities/User";
import "./UserRegister.css";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import emailValidate from "../../scripts/validations/emailValidate";

export default function UserRegister() {
  const navigate = useNavigate();

  const preload = {
    userName: "",
    email: "",
    password: "",
  };

  const createUser = (event) => {
    event.preventDefault();
    preload.userName = event.target.inputUserName.value;
    preload.email = event.target.inputEmail.value;
    preload.password = event.target.inputUserPassword.value;

    User.createUser(preload).then((response) => {
      if (response === 201) {
        navigate("/login");
      }
    });
  };

  useEffect(() => {}, []);

  return (
    <section className="user_register">
      <Form formTitle="New User" onSubmit={createUser}>
        <Input id="inputUserName" description="User Name" />
        <Input id="inputEmail" description="Email" onChange={emailValidate} />
        <Input id="inputUserPassword" description="User Password" />
        <Button value="Register User" />
        <Link to="/login">I have an account</Link>
      </Form>
    </section>
  );
}
