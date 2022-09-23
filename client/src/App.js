import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PageRoutes from "./routes/PageRoutes";
import "./styles/App.css";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
