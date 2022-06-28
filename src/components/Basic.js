// React Bootstrap Imports
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Row,
  InputGroup,
  FormControl,
  FormGroup,
  FormLabel,
} from "react-bootstrap";


function Basic() {

  //this doesn't work at all - says .innerHTML is not a function
  const displayLoanAmount = () => {
    let loanAmountValue = document.getElementById("loan-amount").value;
    document
      .getElementById("display-loan-amount")
      .innerHTML({ loanAmountValue });
  };

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={6} xl={5} xxl={4}>
            <Card bg="light" border="secondary" className="shadow-lg">
              <Card.Header className="text-center">
                <h2>Basic Calculation</h2>
              </Card.Header>
              <Card.Body>
                <Form method="GET">
                  <Row className="mb-3 justify-content-center">
                    <Col xs={8}>
                      <FormGroup>
                        <FormLabel htmlFor="loan-amount">LoanAmount:</FormLabel>
                        <InputGroup>
                          <InputGroup.Text>$</InputGroup.Text>
                          <FormControl
                            aria-label="Amount (whole numbers only)"
                            type="number"
                            id="loan-amount"
                            min="1"
                            required
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-3 justify-content-center">
                    <Col xs={8}>
                      <FormGroup>
                        <FormLabel htmlFor="annual-interest-rate">
                          Annual Interest Rate:
                        </FormLabel>
                        <InputGroup>
                          <FormControl
                            aria-label="Annual Interest Rate (to two decimal places)"
                            type="number"
                            id="annual-interest-rate"
                            min="0.01"
                            step="0.01"
                            required
                          />
                          <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>
                  <Row className="mb-4 justify-content-center">
                    <Col xs={5}>
                      <Form.Group>
                        <Form.Label htmlFor="loan-term">Loan Term:</Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="number"
                            id="loan-term"
                            name="loan-term"
                            placeholder="# of"
                            min="1"
                            required
                          />
                          <InputGroup.Text>&rarr;</InputGroup.Text>
                        </InputGroup>
                        
                      </Form.Group>
                    </Col>
                    <Col xs="auto">
                      <Form.Group>
                        <Form.Label htmlFor="term-unit">Term Unit:</Form.Label>
                        <Form.Select id="term-unit" name="term-unit">
                          <option>Years</option>
                          <option>Months</option>
                          <option>Weeks</option>
                          <option>Days</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-center">
                      <Button
                        type="reset"
                        variant="outline-secondary"
                        className="m-2"
                      >
                        Reset
                      </Button>
                      <Button
                        type="submit"
                        variant="secondary"
                        className="m-2"
                        onSubmit={displayLoanAmount}
                      >
                        Calculate
                      </Button>
                    </Col>
                  </Row>
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
