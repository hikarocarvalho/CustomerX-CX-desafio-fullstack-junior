import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";
import ContactList from "../../components/contactList/ContactList";
import CustomerList from "../../components/customerList/CustomerList";
import "./Home.css";

const ContactsContext = createContext(null);

export default function Home() {
  const [idCustomer, setIdCustomer] = useState();

  const navigate = useNavigate();

  const logout = (event) => {
    event.preventDefault();
    localStorage.removeItem("auth");
    navigate("/login");
  };

  useEffect(() => {});
  return (
    <div className="home">
      <i className="bi bi-arrow-right-square-fill logout" onClick={logout}></i>
      <ContactsContext.Provider value={{ idCustomer, setIdCustomer }}>
        <CustomerList />
        <ContactList />
      </ContactsContext.Provider>
    </div>
  );
}

export { ContactsContext };
