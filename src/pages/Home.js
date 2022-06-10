// React Router Imports
import { Routes, Route } from "react-router-dom";
// Bootstrap Imports
import { Navbar, Container, Nav, Row } from "react-bootstrap";
// Component Imports
import Basic from "../components/Basic";
import Advanced from "../components/Advanced";
import BasicResultsMockup from "../components/BasicResultsMockup";
import NoPageFound from "../components/NoPageFound";
// Style Imports
import "./Home.module.css";
import AdvancedResultsMockup from "../components/AdvancedResultsMockup";

function Home() {
  return (
    <>
      <Navbar bg="light" variant="light">
        <Container>
          <Row>
            <Navbar.Brand>Loan Amortization Calculator</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Basic</Nav.Link>
              <Nav.Link href="/BasicResultsMockup">Basic Results Mockup</Nav.Link>
              <Nav.Link href="/Advanced">Advanced</Nav.Link>
              <Nav.Link href="/AdvancedResultsMockup">Advanced Results Mockup</Nav.Link>
            </Nav>
          </Row>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="Advanced" element={<Advanced />} />
        <Route path="BasicResultsMockup" element={<BasicResultsMockup />} />
        <Route path="AdvancedResultsMockup" element={<AdvancedResultsMockup />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
}

export default Home;
