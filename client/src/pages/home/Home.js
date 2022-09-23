import {useState, useEffect, createContext} from 'react';
import ContactList from "../../components/contactList/ContactList";
import CustomerList from "../../components/customerList/CustomerList";
import './Home.css';

const ContactsContext = createContext(null);

export default function Home() {
  const [idCustomer, setIdCustomer] = useState();
  useEffect(()=>{});
 return (
  <div className="home">
    <ContactsContext.Provider value={{idCustomer, setIdCustomer}}>
      <CustomerList />
      <ContactList />
    </ContactsContext.Provider>
  </div>
 );
}

export {ContactsContext};
