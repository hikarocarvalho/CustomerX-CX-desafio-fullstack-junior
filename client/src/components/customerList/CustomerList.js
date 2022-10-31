import { useState, useEffect, useContext } from "react";
import { ContactsContext } from "./../../pages/home/Home.js";
import { ModalContext } from "../../App.js";
import Button from "../formComponents/button/Button";
import Table from "../tableComponents/table/Table";
import TableContainer from "../tableComponents/tableContainer/TableContainer";
import TBody from "../tableComponents/tBody/TBody";
import TFoot from "../tableComponents/tFoot/TFoot";
import THeader from "../tableComponents/tHeader/THeader";
import Customer from "../../api/entities/Customer";
import CreateNewCustomer from "../createNewCustomer/CreateNewCustomer.js";
import "./CustomerList.css";

export default function CustomerList(props) {
  const [customers, setCustomers] = useState();
  const { setIdCustomer } = useContext(ContactsContext);
  const { modalView, setModalView } = useContext(ModalContext);

  const showModal = (event) => {
    event.preventDefault();
    setModalView({
      ...modalView,
      view: true,
      children: <CreateNewCustomer></CreateNewCustomer>,
    });
  };

  const title = "Lista de Clientes";
  const topics = [
    "Nome Completo",
    "E-mails",
    "Telefones",
    "Data de Registro",
    "Ações",
  ];
  const dataNames = ["complete_name", "mails", "phones", "created_at"];

  const getCustomerId = (event) => {
    event.preventDefault();
    if (event.target.parentElement.id) {
      setIdCustomer(event.target.parentElement.id);
    }
  };

  const deleteCustomer = (event)=>{
    event.preventDefault();
    Customer.deleteCustomer(parseInt(event.target.parentElement.parentElement.id));
  }

  const editCustomer = (event)=>{
    event.preventDefault();
    
  }

  useEffect(() => {
    if (!customers) {
      Customer.getCustomers().then((response) => {
        response.data.forEach((customer, index) => {
          customer.mails.length > 0
            ? (response.data[index].mails = customer.mails[0].email)
            : (response.data[index].mails = "");

          customer.phones.length > 0
            ? (response.data[index].phones = customer.phones[0].phone)
            : (response.data[index].phones = "");
        });
        setCustomers({
          ...customers,
          customerList: response.data,
        });
      });
    }
  }, []);

  return (
    <section className="customer-list">
      <TableContainer>
        <Table>
          <THeader title={title} topics={topics} />
          {customers ? (
            <TBody
              list={customers.customerList}
              dataNames={dataNames}
              event={getCustomerId}
              deleteEvent={deleteCustomer}
              editEvent={editCustomer}
            />
          ) : (
            ""
          )}
          <TFoot
            quantity={customers ? customers.customerList.length : 0}
            topics={topics}
          />
        </Table>
      </TableContainer>
      <Button value={"+"} onClick={showModal} />
    </section>
  );
}
