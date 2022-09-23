import Auth from "../../api/entities/Auth";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export default function AuthPage(props) {
  const [auth, setAuth] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      Auth.authenticate().then((authorize) => {
        if (authorize === true) {
          setAuth({
            ...auth,
            auth: true,
          });
        } else {
          setAuth({
            ...auth,
            auth: false,
          });
          navigate("/login");
        }
      });
    } else {
      navigate("/login");
    }
  }, [localStorage.getItem("auth")]);

  return <>{auth ? auth.auth ? props.children : <></> : <></>}</>;
}
