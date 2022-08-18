import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import "./styles/globals.scss";
import App from "./App";
import { AnimatePresence } from "framer-motion";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AnimatePresence exitBeforeEnter>
        <App />
      </AnimatePresence>
    </BrowserRouter>
  </React.StrictMode>
);
