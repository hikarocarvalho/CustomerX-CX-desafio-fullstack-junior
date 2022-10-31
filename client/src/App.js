import { useState, useEffect, createContext } from "react";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "./components/modal/Modal";
import PageRoutes from "./routes/PageRoutes";
import "./styles/App.css";

const ModalContext = createContext(null);

export default function App() {
  const [modalView, setModalView] = useState({
    view: false,
    children: <></>,
  });

  useEffect(() => {}, []);

  return (
    <div className="App">
      <ModalContext.Provider value={{ modalView, setModalView }}>
        <BrowserRouter>
          <PageRoutes />
        </BrowserRouter>
        <ToastContainer
          position="top-right"
          toastStyle={{
            backgroundColor: "var(--thirdColor)",
            color: "var(--firstColor)",
            fontWeight: "bold",
            fill: "var(--firstColor)",
          }}
        />

        {modalView.view ? <Modal>{modalView.children}</Modal> : ""}
      </ModalContext.Provider>
    </div>
  );
}

export { ModalContext };
