// React Imports
import BasicCalculated from "./BasicCalculated";
import { useState } from "react";

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
import BasicTable from "./BasicTable";


function Basic() {
  
  // Defining the initial state:
  const initialDetails = {
    showResults: false,
    loanAmountValue: 0,
    annualInterestRateValue: 0,
    termLengthValue: 0
  }

  // Setting the state property "details" and initial value for it:
  const [details, setDetails] = useState(initialDetails);

  // Getting the user input values (Calculate button onClick event):
  const onFormSubmit = (event) => {
    event.preventDefault();
    const updatedDetails = {
          showResults: true,
          loanAmountValue: event.target.loan_amount.value,
          annualInterestRateValue: event.target.annual_interest_rate.value,
          termLengthValue: event.target.term_length.value
    };

    // Updating the state to the user input values:
    setDetails(updatedDetails);
  }

  // Making calculations based on user inputs:
  const termLengthInMonths = details.termLengthValue * 12.0;
  const monthlyInterestRate = details.annualInterestRateValue / 100.00 / 12.0;
  const monthlyRepaymentAmount = (details.loanAmountValue * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, termLengthInMonths))) / (Math.pow(1 + monthlyInterestRate, termLengthInMonths) - 1);
  const totalAmountPaid = termLengthInMonths * monthlyRepaymentAmount;
  const totalInterestPaid = totalAmountPaid - details.loanAmountValue;

  // Resetting form/user input values (Reset button onClick event):
  const resetHandler = () => setDetails(initialDetails);


  return (
    <>
      <Container className="mt-5">

        {/* CARD CONTAINING FORM OF USER INPUTS TO ENTER */}
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={6} xl={5} xxl={4}>
            <Card bg="light" border="secondary" className="shadow-lg">
              <Card.Header className="text-center">
                <h2>Basic Calculation</h2>
              </Card.Header>
              <Card.Body>
                <Form method="GET" onSubmit={onFormSubmit}>

                  {/* LOAN AMOUNT INPUT */}
                  <Row className="mb-3 justify-content-center">
                    <Col xs={8}>
                      <FormGroup>
                        <FormLabel htmlFor="loan_amount">Loan Amount:</FormLabel>
                        <InputGroup>
                          <InputGroup.Text>$</InputGroup.Text>
                          <FormControl
                            aria-label="Amount (whole numbers only)"
                            type="number"
                            id="loan_amount"
                            min="1"
                            required
                          />
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* ANNUAL INTEREST RATE INPUT */}
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
                            max="100"
                            step="0.01"
                            required
                          />
                          <InputGroup.Text>%</InputGroup.Text>
                        </InputGroup>
                      </FormGroup>
                    </Col>
                  </Row>

                  {/* TERM LENGTH INPUT */}
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
                            // figure this out if we want them to be able to do months as well (like 18 months or something)
                            // step="0.083333333"
                            required
                          />
                          <InputGroup.Text>Years</InputGroup.Text>
                        </InputGroup>
                      </Form.Group>
                    </Col>
                  </Row>

                  {/* RESET BUTTON */}
                  <Row>
                    <Col className="text-center">
                      <Button
                        type="reset"
                        variant="outline-secondary"
                        className="m-2"
                        onClick={resetHandler}
                      >
                        Reset
                      </Button>

                      {/* SUBMIT BUTTON */}
                      <Button type="submit" variant="secondary" className="m-2">
                        Calculate
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col> 
        </Row>

        {/* SHOW RESULTS AND TABLE COMPONENTS IF USER SUBMITTED INPUT VALUES */}
        <Row>
          <Col>
            {details.showResults ? (
              <>
                <BasicCalculated
                  loanAmountValue={details.loanAmountValue}
                  annualInterestRateValue={details.annualInterestRateValue}
                  termLengthValue={details.termLengthValue}
                  monthlyRepaymentAmount={monthlyRepaymentAmount}
                  totalInterestPaid={totalInterestPaid}
                  totalAmountPaid={totalAmountPaid}
                />
                <BasicTable 
                  loanAmountValue={details.loanAmountValue}
                  monthlyRepaymentAmount={monthlyRepaymentAmount}
                  monthlyInterestRate={monthlyInterestRate}
                />
              </>
            ) : null}
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Basic;


// Research refs and React Router/URL Parameters (Parsing/Getting URL Parameters)
// use onclick event to change react router destination
//  - ideally to be able to copy and paste a url link that gives somebody the results of specific numbers already.
// Changing the URL parameters and not page location - should rerender components, not sit and do nothing. New URL parameters = new values/new calculations.

//research moment.js for possible dates and table

//look for library that automatically adds the number formatting - JS number formatting library (add commas in proper spaces.)