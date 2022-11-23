// React Bootstrap Imports
import { Table, Col, Row, Button } from "react-bootstrap";
// DayJS Imports
import * as dayjs from "dayjs";

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

  // Initializing variables for table
  let rows = [];
  let remainingBalance = loanAmount;
  let rowsKey = 1;
  let date = dayjs().add(1, "M");
  let janCheck = false;

  // Making rows of table
  while (remainingBalance > monthlyRepaymentAmount) {

    // Making YEAR row without calculations
    if (date.get("M") === 0 && janCheck) {
      rows.push(
        <td key={rowsKey} colSpan="4">
          <div className="d-grid gap-2">
            <Button variant="dark" className="table-button fw-bold" size="sm">
              {date.format("YYYY")}
            </Button>
          </div>
        </td>
      );
      janCheck = false;

    } else {

      // Calculations needed for non-year rows of table
      let amountToInterest = (remainingBalance * monthlyInterestRate).toFixed(2);
      let amountToPrincipal = (monthlyRepaymentAmount - amountToInterest).toFixed(2);
      remainingBalance = (remainingBalance - amountToPrincipal).toFixed(2);

      // Making non-year rows of table
      rows.push(
        <tr key={rowsKey}>
          <td className="fw-bold">{date.format("MMM")}</td>
          <td>{formatter.format(amountToPrincipal)}</td>
          <td>{formatter.format(amountToInterest)}</td>
          <td className="fw-bold">{formatter.format(remainingBalance)}</td>
        </tr>
      );

      // Increasing month
      date = date.add(1, "M");

      // If month = Jan, change janCheck variable to true.
      // Next time through loop, it will pass the if condition to make a YEAR row.
      if (date.get("M") === 0) {
        janCheck = true;
      }
    }

    // Increase key used on rows array elements, so unique for React
    rowsKey += 1;
  }

  // Making last row of table if remainingBalance <= monthlyRepaymentAmount (Final payment)
  rows.push(
    <tr key={rowsKey}>
      <td className="fw-bold">{date.format("MMM")}</td>
      <td>{formatter.format(remainingBalance)}</td>
      <td>{formatter.format(0)}</td>
      <td className="fw-bold">{formatter.format(0)}</td>
    </tr>
  );

  // Render/display the rows of table
  return rows;
};

export default BasicTable;
