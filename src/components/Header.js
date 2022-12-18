// React Bootstrap Imports
import { Navbar, Container, Row } from "react-bootstrap";

function Header() {
  return (
    <Navbar as="header" bg="light" variant="light" className="shadow margin">
      <Container>
        <Row>
          <Navbar.Brand>Loan Amortization Calculator</Navbar.Brand>
        </Row>
      </Container>
    </Navbar>
  );
}

export default Header;
