// React Bootstrap Imports
import { Navbar, Container, Nav, Row } from "react-bootstrap";

function Navigation() {
    return (
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
    );
}

export default Navigation;