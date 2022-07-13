// React Bootstrap Imports
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function AdvancedCalculated({
  loanAmountValue,
  annualInterestRateValue,
  termLengthValue,
  monthlyRepaymentAmount,
  totalInterestPaid,
  totalAmountPaid
}) {
  

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={6} xl={5} xxl={4}>
            <Card bg="light" border="secondary" className="shadow-lg">
              <Card.Header className="text-center">
                <h2>Loan Details</h2>
              </Card.Header>
              <Card.Body className="text-center">
                <h6>Loan Amount: ${loanAmountValue}</h6>
                <h6>Annual Interest Rate: {annualInterestRateValue}%</h6>
                <h6>Term Length: {termLengthValue} years</h6>
              </Card.Body>
              <Card.Header className="text-center">
                <h2>Results</h2>
              </Card.Header>
              <Card.Body className="text-center">
                <h4 className="mt-3">Monthly Repayment</h4>
                <h3 className="text-danger">${monthlyRepaymentAmount.toFixed(2)}</h3>
                <h5 className="mt-3">Interest Paid</h5>
                <h5 className="text-info">${totalInterestPaid.toFixed(2)}</h5>
                <h5 className="mt-3">Extra Repayments Paid</h5>
                <h6 className="text-secondary">$extra repayments calculated</h6>
                <h5 className="mt-3">Expenses Paid</h5>
                <h6 className="text-warning">$expenses calculated</h6>
                <h4 className="mt-3">Total Paid</h4>
                <h6 className="text-muted">
                  principal, interest, extra payments, and expenses
                </h6>
                <h3 className="text-success">${totalAmountPaid.toFixed(2)} + E + X</h3>

                {/* DOES NOTHING YET */}
                <Button type="button" variant="secondary">
                  Email Results
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AdvancedCalculated;
