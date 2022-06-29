// React Bootstrap Imports
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function BasicCalculated({
  loanAmountValue,
  annualInterestRateValue,
  termLengthValue,
  termUnitValue,
}) {
  
  //correct for years selection (probably need some if statements for other selections and 12 would be a dynamic variable)
  let n = termLengthValue * 12.0;
  let i = annualInterestRateValue / 100.0 / 12.0;
  let m =
    (loanAmountValue * (i * Math.pow(1 + i, n))) / (Math.pow(1 + i, n) - 1);
  let c = n * m;
  let totalInterestPaid = c - loanAmountValue;

  return (
    <>
      <Container className="mt-5 mb-5">
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={6} xl={5} xxl={4}>
            <Card bg="light" border="secondary" className="shadow-lg">
              <Card.Header className="text-center">
                <h4>Loan Details</h4>
              </Card.Header>
              <Card.Body className="text-center">
                <h6>Loan Amount: ${loanAmountValue}</h6>
                <h6>Annual Interest Rate: {annualInterestRateValue}%</h6>
                <h6>
                  Term Length: {termLengthValue} {termUnitValue}
                </h6>
              </Card.Body>
              <Card.Header className="text-center">
                <h2>Results</h2>
              </Card.Header>
              <Card.Body className="text-center">
                <h4 className="mt-3">Monthly Repayment (EMI)</h4>
                <h3 className="text-danger">${m.toFixed(2)}</h3>
                <h5 className="mt-3">Pricipal Paid (P)</h5>
                <h5 className="text-primary">${loanAmountValue}</h5>
                <h5 className="mt-3">Interest Paid (I)</h5>
                <h5 className="text-info">${totalInterestPaid.toFixed(2)}</h5>
                <h4 className="mt-3">Total Paid (P+I)</h4>
                <h3 className="text-success">${c.toFixed(2)}</h3>
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

export default BasicCalculated;
