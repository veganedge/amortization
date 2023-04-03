// React Bootstrap Imports
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


export default function Header() {
  return (

    // NAVBAR REACT-BOOTSTRAP COMPONENT, INJECTED AS <header> ELEMENT FOR SEMANTIC HTML
    <Navbar as="header" bg="light" variant="light" className="shadow margin">
      <Container>
        <Row>
          <Navbar.Brand>Loan Amortization Calculator</Navbar.Brand>
        </Row>
      </Container>
    </Navbar>
  );
}