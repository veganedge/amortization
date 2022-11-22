// React Bootstrap Imports
import { Table, Col, Row, Button } from "react-bootstrap";

const BasicTable2 = ({
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
            {/* Dynamic table headings */}
            <thead>
              <tr>
                {tableColumnHeadings.map((item) => (
                  <TableHead item={item} key={item.id} />
                ))}
              </tr>
            </thead>

            {/* Dynamic table body based on info from Basic.js */}
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

const TableHead = ({ item }) => <th>{item.heading}</th>;

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

  // Array of months
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  let rows = [];
  let remainingBalance = loanAmount;

  while (remainingBalance > monthlyRepaymentAmount) {
    // Calculations for table
    let amountToInterest = (remainingBalance * monthlyInterestRate).toFixed(2);
    let amountToPrincipal = (monthlyRepaymentAmount - amountToInterest).toFixed(2);
    remainingBalance = (remainingBalance - amountToPrincipal).toFixed(2);

    // Making rows of table
    rows.push(
      <tr>
        <th>Month</th>
        <td>{formatter.format(amountToPrincipal)}</td>
        <td>{formatter.format(amountToInterest)}</td>
        <td>{formatter.format(remainingBalance)}</td>
      </tr>
    );
  }

  // Making last row of table if remainingBalance <= monthlyRepaymentAmount
  rows.push(<tr>
    <th>Month</th>
    <td>{formatter.format(remainingBalance)}</td>
    <td>{formatter.format(0)}</td>
    <td>{formatter.format(0)}</td>
  </tr>)

  return rows;
};

export default BasicTable2;
