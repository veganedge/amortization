// React Imports
import React from "react";
import ReactDOM from "react-dom/client";
// React Router Imports
import { BrowserRouter as Router } from "react-router-dom";
// Style Imports
import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap/dist/react-bootstrap.js";
import "./index.css";
// Component Imports
import Main from "./pages/Main";
import Header from "./components/Header";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <Router>
      <Main />
    </Router>
  </React.StrictMode>
);