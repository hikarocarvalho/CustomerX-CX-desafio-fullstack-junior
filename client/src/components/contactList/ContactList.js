import { useState, useEffect, useContext } from "react";
import { ContactsContext } from "./../../pages/home/Home.js";
import Contact from '../../api/entities/Contact';
import Button from "../formComponents/button/Button";
import Table from "../tableComponents/table/Table";
import TableContainer from "../tableComponents/tableContainer/TableContainer";
import TBody from "../tableComponents/tBody/TBody";
import TFoot from "../tableComponents/tFoot/TFoot";
import THeader from "../tableComponents/tHeader/THeader";
import "./ContactList.css";

export default function ContactList(props) {
  const [contacts,setContacts] = useState();
  const {idCustomer} = useContext(ContactsContext);
  const title = "Lista de Contatos";
  const topics = ["Nome Completo", "E-mails", "Telefones", "Ações"];
  const dataNames = ["complete_name", "mails", "phones"];
  
  useEffect(()=>{
    if (!contacts && idCustomer) {
      Contact.getContacts(idCustomer).then((response) => {
        response.data.forEach((contact, index) => {
          contact.mails.length > 0
            ? (response.data[index].mails = contact.mails[0])
            : (response.data[index].mails = "");

          contact.phones.length > 0
            ? (response.data[index].phones = contact.phones[0])
            : (response.data[index].phones = "");
        });
        setContacts({
          ...contacts,
          contactList: response.data,
        });
      });
    }
  },[idCustomer])

  return (
    <section className="contact-list">
      <TableContainer>
        <Table>
          <THeader title={title} topics={topics} />
          {contacts ? (
              <TBody list={contacts.contactList} dataNames={dataNames} />
          ) : (
            ""
          )}
        <TFoot quantity={contacts? contacts.contactList.length:0} topics={topics} />
        </Table>
      </TableContainer>
      <Button value={"+"} />
    </section>
  );
}
