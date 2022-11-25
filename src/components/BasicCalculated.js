// React Bootstrap Imports
import { Button, Card, Col, Container, Row } from "react-bootstrap";

function BasicCalculated({
  loanAmount,
  annualInterestRate,
  termLength,
  monthlyRepaymentAmount,
  totalInterestPaid,
  totalAmountPaid,
}) {

  // Create currency number formatter.
  let currencyFormatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

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
                <h6>Loan Amount: {currencyFormatter.format(loanAmount)}</h6>
                <h6>
                  Annual Interest Rate:{" "}
                  {new Intl.NumberFormat().format(annualInterestRate)}%
                </h6>
                <h6>
                  Term Length: {new Intl.NumberFormat().format(termLength)}{" "}
                  years
                </h6>
              </Card.Body>
              <Card.Header className="text-center">
                <h2>Results</h2>
              </Card.Header>
              <Card.Body className="text-center">
                <h4 className="mt-3">Monthly Repayment</h4>
                <h3 className="text-danger">
                  {currencyFormatter.format(monthlyRepaymentAmount)}
                </h3>
                <h5 className="mt-3">Total Interest Paid</h5>
                <h5 className="text-info">
                  {currencyFormatter.format(totalInterestPaid)}
                </h5>
                <h4 className="mt-3 mb-0">Total Cost</h4>
                <h6 className="text-muted">principal + interest</h6>
                <h3 className="text-success">
                  {currencyFormatter.format(totalAmountPaid)}
                </h3>

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

export default BasicCalculated;
