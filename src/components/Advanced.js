// React Imports
import AdvancedCalculated from "./AdvancedCalculated";
import { useState } from "react";

// React Bootstrap Imports
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  FormControl,
  FormGroup,
  FormLabel,
  InputGroup,
  Row,
} from "react-bootstrap";

function Advanced() {
  
  const [loanAmountValue, setLoanAmountValue] = useState("");
  const [annualInterestRateValue, setAnnualInterestRateValue] = useState("");
  const [termLengthValue, setTermLengthValue] = useState("");
  const [termUnitValue, setTermUnitValue] = useState("Years");

  const [showResults, setShowResults] = useState(false);
  const showResultsHandler = (event) => {
    event.preventDefault();
    setShowResults(true);
    setLoanAmountValue(event.target.loan_amount.value);
    setAnnualInterestRateValue(event.target.annual_interest_rate.value);
    setTermLengthValue(event.target.term_length.value);
    setTermUnitValue(event.target.term_unit.value);
  };

  const resetHandler = () => setShowResults(false);

  return (
    <>
      <Container className="mt-5">
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={6} xl={5} xxl={4}>
            <Card bg="light" border="secondary" className="shadow-lg">
              <Card.Header className="text-center">
                <h2>Advanced Calculation</h2>
              </Card.Header>
              <Card.Body>
                <Form method="GET" onSubmit={showResultsHandler}>
                  <Row className="mb-3 justify-content-center">
                    <Col xs={8}>
                      <FormGroup>
                        <FormLabel htmlFor="loan_amount">LoanAmount:</FormLabel>
                        <InputGroup>
                          <InputGroup.Text>$</InputGroup.Text>
                          <FormControl
                            aria-label="Amount (whole numbers only))"
                            type="number"
                            id="loan_amount"
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
                        <FormLabel htmlFor="annual_interest_rate">
                          Annual Interest Rate:
                        </FormLabel>
                        <InputGroup>
                          <FormControl
                            aria-label="Annual Interest Rate (to two decimal places)"
                            type="number"
                            id="annual_interest_rate"
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
                        <Form.Label htmlFor="term_length">
                          Term Length:
                        </Form.Label>
                        <InputGroup>
                          <Form.Control
                            type="number"
                            id="term_length"
                            name="term_length"
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
                        <Form.Label htmlFor="term_unit">Term Unit:</Form.Label>
                        <Form.Select id="term_unit" name="term_unit">
                          <option>Years</option>
                          <option>Months</option>
                          <option>Weeks</option>
                          <option>Days</option>
                        </Form.Select>
                      </Form.Group>
                    </Col>
                  </Row>
                  <Form.Group className="mt-4">
                    <Form.Label>Loan Start Date:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="still working on this"
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Extra Repayments:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="still working on this"
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Interest Rate Changes:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="still working on this"
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Loan Offset Account:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="still working on this"
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Repayment Holiday Period:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="still working on this"
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Expenses:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="still working on this"
                    />
                  </Form.Group>
                  <Form.Group className="mt-2">
                    <Form.Label>Loan Settings:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="still working on this"
                    />
                  </Form.Group>
                  <Col className="text-center">
                    <Button
                      type="reset"
                      variant="outline-secondary"
                      className="m-2"
                      onClick={resetHandler}
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
      {showResults ? (
        <AdvancedCalculated
          loanAmountValue={loanAmountValue}
          annualInterestRateValue={annualInterestRateValue}
          termLengthValue={termLengthValue}
          termUnitValue={termUnitValue}
        />
      ) : null}
    </>
  );
}

export default Advanced;
