// React Imports
import React from 'react';
import ReactDOM from 'react-dom/client';
// React Router Imports
import { BrowserRouter as Router } from 'react-router-dom';
// Style Imports
import 'bootstrap/dist/css/bootstrap.css';
import './globals.css';
import 'react-bootstrap/dist/react-bootstrap.js';
// Component Imports
import Home from './pages/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Home />
    </Router>
  </React.StrictMode>
);
