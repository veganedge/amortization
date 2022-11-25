// React Bootstrap Imports
import { Button } from "react-bootstrap";
// DayJS Imports
import * as dayjs from "dayjs";

const TableBody = ({
  loanAmount,
  monthlyRepaymentAmount,
  monthlyInterestRate,
}) => {

  // Create currency formatter
  let currencyFormatter = new Intl.NumberFormat("en-US", {
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

  // Making rows of table
  while (remainingBalance > monthlyRepaymentAmount) {

    // Making YEAR row without calculations
    if (date.get("M") === 0) {
      rows.push(
        <td key={rowsKey} colSpan="4">
          <div className="d-grid gap-2">
            <Button variant="dark" className="table-button fw-bold" size="sm">
              {date.format("YYYY")}
            </Button>
          </div>
        </td>
      );
    }

    // Calculations needed for non-year rows of table
    let amountToInterest = (remainingBalance * monthlyInterestRate).toFixed(2);
    let amountToPrincipal = (monthlyRepaymentAmount - amountToInterest).toFixed(2);
    remainingBalance = (remainingBalance - amountToPrincipal).toFixed(2);

    // Making non-year rows of table
    rows.push(
      <tr key={rowsKey}>
        <td className="fw-bold">{date.format("MMM")}</td>
        <td>{currencyFormatter.format(amountToPrincipal)}</td>
        <td>{currencyFormatter.format(amountToInterest)}</td>
        <td className="fw-bold">{currencyFormatter.format(remainingBalance)}</td>
      </tr>
    );

    // Increasing month
    date = date.add(1, "M");

    // Increase key used on rows array elements, so unique for React
    rowsKey += 1;
  }

  // Making last row of table if remainingBalance <= monthlyRepaymentAmount (Final payment)
  rows.push(
    <tr key={rowsKey}>
      <td className="fw-bold">{date.format("MMM")}</td>
      <td>{currencyFormatter.format(remainingBalance)}</td>
      <td>{currencyFormatter.format(0)}</td>
      <td className="fw-bold">{currencyFormatter.format(0)}</td>
    </tr>
  );

  // Render/display the rows of table
  return rows;
};

export default TableBody;
