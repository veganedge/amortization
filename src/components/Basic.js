// React Bootstrap Imports
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";




function Basic() {

  //this doesn't work at all even with onclick - it says "loan-amount" element is null...
  //not sure why it's checking it before onclick event
  const displayLoanAmount = () => {
    let loanAmountValue = document.getElementById("loan-amount").value;
    document.getElementById("display-loan-amount").innerHTML(loanAmountValue)
  }

  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col>
            <Card bg="light" border="secondary" className="shadow-lg">
              <Card.Header className="text-center">
                <h2>Basic Calculation</h2>
              </Card.Header>
              <Card.Body>
                <Form method="GET">
                  <Form.Group>
                    <Form.Label htmlFor="loan-amount">Loan Amount:</Form.Label>
                    <Form.Control
                      type="number"
                      id="loan-amount"
                      name="loan-amount"
                      placeholder="$"
                      min="1"
                      required
                    />
                  </Form.Group>
                  <Form.Group className="mt-4">
                    <Form.Label htmlFor="annual-interest-rate">
                      Annual Interest Rate:
                    </Form.Label>
                    <Form.Control
                      type="number"
                      id="annual-interest-rate"
                      name="annual-interest-rate"
                      placeholder="%"
                      step="0.01"
                      min="0.01"
                      required
                    />
                  </Form.Group>
                  <Row className="mb-4">
                    <Col xs={8}>
                      <Form.Group className="mt-4">
                        <Form.Label htmlFor="loan-term">Loan Term:</Form.Label>
                        <Form.Control
                          type="number"
                          id="loan-term"
                          name="loan-term"
                          placeholder="# of ------->"
                          min="1"
                          required
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group className="mt-4">
                        <Form.Label htmlFor="term-unit">Term Unit</Form.Label>
                        <Form.Select id="term-unit" name="term-unit">
                          <option>Years</option>
                          <option>Months</option>
                          <option>Weeks</option>
                          <option>Days</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Col className="text-center">
                    {/* NEED TO GET THIS RESET BUTTON TO CLEAR ALL FORM FILEDS */}
                    <Button
                      type="reset"
                      variant="outline-secondary"
                      className="m-2"
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
      <p id="display-loan-amount"></p>
    </>
  );
}

export default Basic;