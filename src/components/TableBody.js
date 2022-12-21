// React Bootstrap Imports
import { Button } from "react-bootstrap";
// DayJS Imports
import * as dayjs from "dayjs";

// Creating currency formatter
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

const TableBody = ({
  loanDate,
  loanAmount,
  monthlyRepaymentAmount,
  monthlyInterestRate,
}) => {
  //1. First, we are going to build a data structure holding all of our repayment data in an easy to use format (such as by month and year)
  //================================================================================================================================
  // remainingBalance we will use for iterating over the lifetime of the loan
  let remainingBalance = loanAmount;

  // Initialize date variable for table
  const customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);

  // date of first payment due (a month after loan is received)
  let date = dayjs(loanDate, "YYYY-MM").add(1, "M");

  // this will hold all repayment data by year and month, allowing us to display it any way we want, in a table, accordion or anything
  let repaymentDataByYear = [];

  // this will hold each simulated month's repayment data
  let monthRepaymentData = {};

  let singleYearData = [];

  let allMonthRepaymentData = [];

  let lastYearChecked = date.format("YYYY");

  // Making rows of table (except last row)
  while (remainingBalance > 0) {
    // console.log("remainingBalance: ", remainingBalance);

    // simulate a monthly payment and do calculations
    let amountToInterest = (remainingBalance * monthlyInterestRate).toFixed(2);
    let amountToPrincipal = (monthlyRepaymentAmount - amountToInterest).toFixed(
      2
    );
    remainingBalance = (remainingBalance - amountToPrincipal).toFixed(2);

    // this month's repayment data
    monthRepaymentData = {
      amountToInterest,
      amountToPrincipal,
      remainingBalance,
      month: date.format("MMM"),
    };

    console.log("lastYearChecked", lastYearChecked);
    console.log("date ", date.format("YYYY"));

    if (lastYearChecked != date.format("YYYY")) {
      //we have iterated into a new year. push last years data to our repaymentDataByYear
      repaymentDataByYear.push({ [lastYearChecked]: singleYearData });

      //reset our single year data and enter the new year's month we just calculated:
      singleYearData = [];
      lastYearChecked = date.format("YYYY");
      console.log("pushed lastyears data to repaymentDataByYear!");
    }

    //add this month to the current year's data:
    singleYearData.push(monthRepaymentData);

    // Increasing month
    date = date.add(1, "M");
  }

  // add the remainder data
  //repaymentDataByYear.push({ [date.format("YYYY")]: singleYearData });

  console.log("repaymentDataByYear", repaymentDataByYear);
  console.log("allMonthRepaymentData: ", allMonthRepaymentData);

  //2. now, we build up our view code -- table/accordion/whatever we want with the data structure we created
  //================================================================================================================================

  // Rendering/displaying the rows of table
  return [];
};

export default TableBody;

// Initializing variables for table
// let rows = [];
// let rowsKey = 1;

// Making NON-YEAR rows of table
// rows.push(
//   <tr key={rowsKey}>
//     <td className="fw-bold">{date.format("MMM")}</td>
//     <td>{currencyFormatter.format(amountToPrincipal)}</td>
//     <td>{currencyFormatter.format(amountToInterest)}</td>
//     <td className="fw-bold">
//       {currencyFormatter.format(remainingBalance)}
//     </td>
//   </tr>
// );

// if month is JAN || if it's the VERY FIRST ROW OF TABLE
// rows.push(
//   <tr key={rowsKey}>
//     <td colSpan="4">
//       <div className="d-grid gap-2">
//         <Button
//           variant="dark"
//           className="table-button fw-bold"
//           size="sm"
//           onClick={toggleHidden}
//         >
//           {date.format("YYYY")}
//         </Button>
//       </div>
//     </td>
//   </tr>
// );
