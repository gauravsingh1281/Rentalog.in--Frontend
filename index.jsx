import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./src/App.jsx";
import {ToastContainer} from "react-toastify"
import AppcontextProvider from "./src/context/AppContext.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>   
    <ToastContainer />
    <AppcontextProvider>
    <App />
    </AppcontextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
