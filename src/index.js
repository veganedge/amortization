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
import Navigation from "./components/Navigation";
import FooterNavigation from "./components/FooterNavigation";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Navigation />
    <Router>
      <Main />
    </Router>
    {/*<FooterNavigation />*/}
  </React.StrictMode>
);
