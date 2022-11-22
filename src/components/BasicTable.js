// React Bootstrap Imports
import { Table, Col, Row, Button } from "react-bootstrap";
// DayJS Imports
import * as dayjs from 'dayjs';

const BasicTable = ({
  loanAmount,
  monthlyRepaymentAmount,
  monthlyInterestRate,
}) => {
  // Dynamic table headings
  const tableColumnHeadings = [
    { id: "1", heading: "Month" },
    { id: "2", heading: "Amount to Principal" },
    { id: "3", heading: "Amount to Interest" },
    { id: "4", heading: "Outstanding Loan Balance" },
  ];

  return (
    <>
      <Row className="justify-content-center">
        <Col lg={10}>
          <Table
            striped
            bordered
            hover
            size="sm"
            className="border-dark text-center"
          >
            {/* Dynamic TABLE HEADINGS */}
            <thead>
              <tr>
                {tableColumnHeadings.map((item) => (
                  <TableHead item={item} key={item.id} />
                ))}
              </tr>
            </thead>

            {/* Dynamic TABLE BODY based on info from BASIC.JS */}
            <tbody>
              <TableBody
                loanAmount={loanAmount}
                monthlyRepaymentAmount={monthlyRepaymentAmount}
                monthlyInterestRate={monthlyInterestRate}
              />
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

// TableHead Component
const TableHead = ({ item }) => <th>{item.heading}</th>;

// TableBody Component
const TableBody = ({
  loanAmount,
  monthlyRepaymentAmount,
  monthlyInterestRate,
}) => {
  // Create number formatter
  let formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  let rows = [];
  let remainingBalance = loanAmount;
  let counter = 1;
  let date = dayjs().add(1, "M").format("MMM YYYY");

  while (remainingBalance > monthlyRepaymentAmount) {

    // Calculations for table
    let amountToInterest = (remainingBalance * monthlyInterestRate).toFixed(2);
    let amountToPrincipal = (monthlyRepaymentAmount - amountToInterest).toFixed(2);
    remainingBalance = (remainingBalance - amountToPrincipal).toFixed(2);

    // Making rows of table
    rows.push(
      <tr key={counter}>
        <td className="fw-bold">{date}</td>
        <td>{formatter.format(amountToPrincipal)}</td>
        <td>{formatter.format(amountToInterest)}</td>
        <td className="fw-bold">{formatter.format(remainingBalance)}</td>
      </tr>
    );

    counter += 1;
    date = dayjs(date).add(1, "M").format("MMM YYYY");
  }

  // Making last row of table if remainingBalance <= monthlyRepaymentAmount (Final payment)
  rows.push(
    <tr key={counter}>
      <td className="fw-bold">{date}</td>
      <td>{formatter.format(remainingBalance)}</td>
      <td>{formatter.format(0)}</td>
      <td className="fw-bold">{formatter.format(0)}</td>
    </tr>)

  return rows;

};

export default BasicTable;
