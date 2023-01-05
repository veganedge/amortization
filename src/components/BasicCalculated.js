// React Bootstrap Imports
import { Button, Card, Col, Container, Row } from "react-bootstrap";
// DayJS Imports
import * as dayjs from "dayjs";


function BasicCalculated({
  loanDate,
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

  // Create formatted variables to display in LOAN DETAILS SECTION
  let formattedLoanDate = dayjs(loanDate).format("MMM YYYY");
  let formattedPayoffDate = dayjs(loanDate, "YYYY-MM").add(termLength * 12, "M").format("MMM YYYY");

  return (
    <>
      <Container className="mt-5 mb-5">

        {/* CARD CONTAINING CALCULATED RESULTS OF USER INPUT VALUES */}
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={6} xl={5} xxl={4}>
            <Card bg="light" border="secondary" className="shadow-lg">
              
              {/* LOAN DETAILS SECTION */}
              <Card.Header className="text-center">
                <h3>Loan Details</h3>
              </Card.Header>
              <Card.Body className="text-center">
                <h6>Loan Date: {formattedLoanDate}</h6>
                <h6>Loan Amount: {currencyFormatter.format(loanAmount)}</h6>
                <h6>
                  Annual Interest Rate:{" "}
                  {new Intl.NumberFormat().format(annualInterestRate)}%
                </h6>
                <h6>
                  Term Length: {new Intl.NumberFormat().format(termLength)}{" "}
                  years
                </h6>
                <h6>Payoff Date: {formattedPayoffDate}</h6>
              </Card.Body>

              {/* RESULTS SECTION */}
              <Card.Header className="text-center">
                <h2>Results</h2>
              </Card.Header>
              <Card.Body className="text-center">
                <h4 className="mt-3">Monthly Repayment</h4>
                <h5 className="text-danger">
                  {currencyFormatter.format(monthlyRepaymentAmount)}
                </h5>
                <h4 className="mt-3">Total Interest Paid</h4>
                <h5>{currencyFormatter.format(totalInterestPaid)}</h5>
                <h4 className="mt-3">Total Cost Of Loan</h4>
                <h5 className="mb-4">
                  {currencyFormatter.format(totalAmountPaid)}
                </h5>

                {/* EMAIL BUTTON */}
                <Button
                  type="button"
                  variant="secondary"
                  href={`mailto:?body=Follow this link to see the loan information:%0D%0A%0D%0A{copy/paste the URL address from loan here}%0D%0A%0D%0A -{your name here}`}
                >
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
