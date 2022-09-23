import Form from "./../../components/formComponents/form/Form";
import Input from "./../../components/formComponents/input/Input";
import Button from "./../../components/formComponents/button/Button";
import Auth from "../../api/entities/Auth";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import emailValidate from "../../scripts/validations/emailValidate";

export default function Login() {
  const navigate = useNavigate();

  const setToken = (event) => {
    event.preventDefault();
    const preload = {
      email: event.target.inputUserEmail.value,
      password: event.target.inputUserPassword.value,
    };
    Auth.login(preload).then((response) => {
      console.log(response);
      localStorage.setItem("auth", response.data.token);
      navigate("/");
    });
  };
  return (
    <section className="login">
      <Form formTitle="User Login" onSubmit={setToken}>
        <Input
          id="inputUserEmail"
          description="user email"
          onChange={emailValidate}
        />
        <Input id="inputUserPassword" description="user password" />
        <Button value="Login" />
        <Link to="/user-register">I need to create an account.</Link>
      </Form>
    </section>
  );
}
