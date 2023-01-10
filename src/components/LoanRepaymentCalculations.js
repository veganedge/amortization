// React Bootstrap Imports
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// DayJS Imports
import * as dayjs from "dayjs";


// import { useSearchParams } from "react-router-dom";
// may need this to supply email body with the proper URL to share results

  

function LoanRepaymentCalculations({
  loanDate,
  loanAmount,
  annualInterestRate,
  termLength,
  monthlyRepaymentAmount,
  totalInterestPaid,
  totalAmountPaid,
}) {


  // // Leaving this until I have email figured out
  // let [searchParams] = useSearchParams();

  // console.log(searchParams);
  // // Getting the searchParams to use as value of inputs if exist:
  // const loanAmountParam = searchParams.get("loanAmount");
  // const annualInterestRateParam = searchParams.get("annualInterestRate");
  // const termLengthParam = searchParams.get("termLength");
  // const loanDateParam = searchParams.get("loanDate");

  // console.log("loanAmountParam: ", loanAmountParam);
  // console.log("annualInterestRateParam: ", annualInterestRateParam);
  // console.log("termLengthParam: ", termLengthParam);
  // console.log("loanDateParam: ", loanDateParam);


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
                  // href={`mailto:?body=Follow this link to see the loan information: ${window.location}`}
                  href={`mailto:{EMAIL RECIPIENT}?subject={YOUR SUBJECT HERE}&body=Follow this link to see the loan information: %0D%0A%0D%0A {COPY/PASTE THE URL ADDRESS HERE} %0D%0A%0D%0A -{YOUR NAME HERE}`}
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

export default LoanRepaymentCalculations;
