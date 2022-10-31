import { useState, useEffect, useContext } from "react";
import { ContactsContext } from "./../../pages/home/Home.js";
import { ModalContext } from "../../App.js";
import Contact from '../../api/entities/Contact';
import Button from "../formComponents/button/Button";
import Table from "../tableComponents/table/Table";
import TableContainer from "../tableComponents/tableContainer/TableContainer";
import TBody from "../tableComponents/tBody/TBody";
import TFoot from "../tableComponents/tFoot/TFoot";
import THeader from "../tableComponents/tHeader/THeader";
import CreateNewContact from "../createNewContact/CreateNewContact.js";
import "./ContactList.css";

export default function ContactList(props) {
  const [contacts,setContacts] = useState();
  const {idCustomer} = useContext(ContactsContext);
  const title = "Lista de Contatos";
  const topics = ["Nome Completo", "E-mails", "Telefones", "Ações"];
  const dataNames = ["complete_name", "mails", "phones"];

  const { modalView, setModalView } = useContext(ModalContext);

  const showModal = (event) => {
    event.preventDefault();
    setModalView({
      ...modalView,
      view: true,
      children: <CreateNewContact idCustomer={idCustomer}></CreateNewContact>,
    });
  };

  const deleteCustomer = (event)=>{
    event.preventDefault();
    Contact.deleteContact(parseInt(event.target.parentElement.parentElement.id));
  }

  const editCustomer = (event)=>{
    event.preventDefault();
    
  }

  useEffect(()=>{
    if(idCustomer){
      Contact.getContacts(idCustomer).then((response) => {
        
        response.data.forEach((contact, index) => {
          contact.mails.length > 0
            ? (response.data[index].mails = contact.mails[0].email)
            : (response.data[index].mails = "");

          contact.phones.length > 0
            ? (response.data[index].phones = contact.phones[0].phone)
            : (response.data[index].phones = "");
        });
        
        setContacts({
          ...contacts,
          contactList: response.data,
        });
      });
    }
  },[idCustomer]);

  return (
    <section className="contact-list">
      <TableContainer>
        <Table>
          <THeader title={title} topics={topics} />
          {contacts ? (
              <TBody 
              list={contacts.contactList} 
              dataNames={dataNames} 
              deleteEvent={deleteCustomer}
              editEvent={editCustomer}
              />
          ) : (
            ""
          )}
        <TFoot quantity={contacts? contacts.contactList.length:0} topics={topics} />
        </Table>
      </TableContainer>
      <Button value={"+"} onClick={showModal}/>
    </section>
  );
}
