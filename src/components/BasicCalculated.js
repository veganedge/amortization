// React Bootstrap Imports
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function BasicCalculated() {
  return (
    <>
      <Container className="mt-5">
        <Row style={{justifyContent: 'center'}}>
          <Col xs={10} md={8} lg={6} xl={5} xxl={4}>
            <Card bg="light" border="secondary" className="shadow-lg">
              <Card.Header className="text-center">
                <h2>Results</h2>
              </Card.Header>
              <Card.Body className="text-center">
                <h4 className="mt-3">Monthly Repayment (EMI)</h4>
                <h3 className="text-danger">$monthly calculated</h3>
                <h5 className="mt-3">Pricipal Paid (P)</h5>
                <h6 className="text-primary">$principal calculated</h6>
                <h5 className="mt-3">Interest Paid (I)</h5>
                <h6 className="text-warning">$interest calculated</h6>
                <h4 className="mt-3">Total Paid (P+I)</h4>
                <h3 className="text-success">$total calculated</h3>
                <Button type="button" variant="secondary">Email Results</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default BasicCalculated;
