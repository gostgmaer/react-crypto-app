import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import Header from "./Components/Header/Header";
import RouterNavigation from "./Router/Router";

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Header></Header>
        <RouterNavigation></RouterNavigation>
      </div>
      <ToastContainer></ToastContainer>
    </BrowserRouter>
  );
}

export default App;
