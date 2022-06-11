// React Bootstrap Imports
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function BasicCalculated() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card bg="light" border="secondary" className="shadow">
              <Card.Header className="text-center">
                <h2>Results</h2>
              </Card.Header>
              <Card.Body className="text-center">
                <h4 className="mt-3">Monthly Repayment (EMI)</h4>
                {/* MAKE RED */}
                <h3>$monthly calculated</h3>
                <h5 className="mt-3">Pricipal Paid (P)</h5>
                {/* MAKE BLUE */}
                <h6>$principal calculated</h6>
                <h5 className="mt-3">Interest Paid (I)</h5>
                {/* MAKE YELLOW */}
                <h6>$interest calculated</h6>
                <h4 className="mt-3">Total Paid (P+I)</h4>
                {/* MAKE GREEN */}
                <h3>$total calculated</h3>
                <Button variant="secondary">Email Results</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BasicCalculated;
