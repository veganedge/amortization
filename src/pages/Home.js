// React Router Imports
import { Routes, Route } from "react-router-dom";
// React Bootstrap Imports
import { Navbar, Container, Nav, Row } from "react-bootstrap";
// Component Imports
import Basic from "../components/Basic";
import Advanced from "../components/Advanced";
import NoPageFound from "../components/NoPageFound";


function Home() {
  return (
    <>
      <Navbar bg="light" variant="light" className="shadow">
        <Container>
          <Row>
            <Navbar.Brand>Loan Amortization Calculator</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Basic</Nav.Link>
              <Nav.Link href="/Advanced">Advanced</Nav.Link>
            </Nav>
          </Row>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Basic />} />
        <Route path="Advanced" element={<Advanced />} />
        <Route path="*" element={<NoPageFound />} />
      </Routes>
    </>
  );
}

export default Home;