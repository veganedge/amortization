// React Bootstrap Imports
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

function Basic() {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card bg="light" border="secondary" className="shadow">
              <Card.Header className="text-center">
                <h2>Basic Calculation</h2>
              </Card.Header>
              <Card.Body>
                <Form>
                  <Form.Group>
                    <Form.Label>Loan Amount:</Form.Label>
                    <Form.Control type="text" placeholder="$" />
                  </Form.Group>
                  <Form.Group className="mt-4">
                    <Form.Label>Annual Interest Rate:</Form.Label>
                    <Form.Control type="text" placeholder="%" />
                  </Form.Group>
                  <Row className="mb-4">
                    <Col xs={8}>
                      <Form.Group className="mt-4">
                        <Form.Label>Loan Term:</Form.Label>
                        <Form.Control type="text" placeholder="# of ------->" />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mt-4">
                        <Form.Label>Term Unit</Form.Label>
                        <Form.Select>
                          <option>Years</option>
                          <option>Months</option>
                          <option>Days</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Col className="text-center">
                    {/* NEED TO GET THIS RESET BUTTON TO CLEAR ALL FORM FILEDS */}
                    <Button
                      variant="outline-secondary"
                      className="m-2"
                      type="reset"
                    >
                      Reset
                    </Button>
                    <Button type="submit" variant="secondary" className="m-2">
                      Calculate
                    </Button>
                  </Col>
                </Form>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Basic;
