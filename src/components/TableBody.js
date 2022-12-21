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

// onclick handler to toggle rows as hidden/displayed
const toggleHidden = (year) => {
  const tableRows = document.getElementsByClassName(`tr${year}`);
  console.log(tableRows);
  for (let i = 0; i < tableRows.length; i++) {
    if (tableRows[i].hasAttribute("hidden")) {
      tableRows[i].removeAttribute("hidden");
    } else {
      tableRows.setAttribute("hidden", "");
    }
  }
};


const TableBody = ({
  loanDate,
  loanAmount,
  monthlyRepaymentAmount,
  monthlyInterestRate,
}) => {


  //1. CREATE A DATA STRUCTURE holding all of our repayment data in an easy to use format
  //=======================================================================================================================


  //1a. INITIALIZING EVERYTHING NEEDED
  //==============

  // remainingBalance used for iterating over the lifetime of the loan
  let remainingBalance = loanAmount;

  // Initialize date variable for table (customParseFormat is necessary for format we want)
  const customParseFormat = require("dayjs/plugin/customParseFormat");
  dayjs.extend(customParseFormat);
  // Date of first payment due (a month after loan is received)
  let date = dayjs(loanDate, "YYYY-MM").add(1, "M");

  // Holds all repayment data by year and month, allowing easy access to display it any desired way (table, accordion, etc)
  let repaymentDataByYear = [];

  // Holds each month's repayment data
  let monthRepaymentData = {};

  // Holds all the monthRepaymentData objects for a given year
  let singleYearData = [];

  // Used in if condition to add a full singleYearData array into the repaymentDataByYear array
  let lastYearChecked = date.format("YYYY");


  //1b. DEFINE ALL FUNCTIONS used in 1c (Creating data)
  //==============

  // Add previous year's data to total data array
  const addPreviousYearData = () => {
    repaymentDataByYear.push({ [lastYearChecked]: singleYearData });
    // Reset our single year data and enter the new year's month:
    singleYearData = [];
    lastYearChecked = date.format("YYYY");
    console.log("pushed previous year's data to repaymentDataByYear!");
  }
  

  // Add current month to the current year's data:
  const addMonthDataToYearData = () => {
    singleYearData.push(monthRepaymentData);
    // Increasing month
    date = date.add(1, "M");
  }


  // Create current month
  const createMonthData = () => {
    console.log("remainingBalance: ", remainingBalance);
    // Calculations to simulate a monthly payment - ternary needed for final monthly payment
    let amountToInterest =
      remainingBalance < monthlyRepaymentAmount
        ? (0).toFixed(2)
        : (remainingBalance * monthlyInterestRate).toFixed(2);
    let amountToPrincipal =
      remainingBalance < monthlyRepaymentAmount
        ? remainingBalance
        : (monthlyRepaymentAmount - amountToInterest).toFixed(2);
    remainingBalance = (remainingBalance - amountToPrincipal).toFixed(2);

    // This month's repayment data - from above calculations
    monthRepaymentData = {
      amountToInterest,
      amountToPrincipal,
      remainingBalance,
      month: date.format("MMM"),
    };
    console.log("lastYearChecked: ", lastYearChecked);
    console.log("date/current year: ", date.format("YYYY"));
  }

  // Add final year to total data array
  const addFinalYearData = () => {
    repaymentDataByYear.push({ [date.format("YYYY")]: singleYearData });
    console.log("pushed final year data to repaymentDataByYear!");
  }

  //1c. CREATE DATA
  //==============

  while (remainingBalance > 0) {
    createMonthData();
    if (lastYearChecked !== date.format("YYYY")) {
      // if (iterated into a new year) {
      addPreviousYearData();
    }
    addMonthDataToYearData();
  }
  addFinalYearData();
  console.log("repaymentDataByYear: ", repaymentDataByYear);

  
  //2. CREATE THE CODE TO RENDER/DISPLAY THE DATA -- table/accordion/etc
  //=====================================================================================================================

  // Rendering/displaying the rows of table
  return [];
};

export default TableBody;

// Initializing variables for table
// let rows = [];
// let rowsKey = 1;

//   // Making rows of table (except last row)
//   while (remainingBalance > monthlyRepaymentAmount) {
//     // Making YEAR row without calculations
//     if (date.get("M") === 0 || rows.length === 0) {
//       // if month is JAN || if it's the VERY FIRST ROW OF TABLE
//       rows.push(
//         <tr key={rowsKey}>
//           <td colSpan="4">
//             <div className="d-grid gap-2">
//               <Button variant="dark" className="table-button fw-bold" size="sm" onClick={toggleHidden}>
//                 {date.format("YYYY")}
//               </Button>
//             </div>
//           </td>
//         </tr>
//       );
//       // Increasing key used on rows array elements, so unique for React
//       rowsKey += 1;
//     }

//     // Calculations needed for non-year rows of table
//     let amountToInterest = (remainingBalance * monthlyInterestRate).toFixed(2);
//     let amountToPrincipal = (monthlyRepaymentAmount - amountToInterest).toFixed(2);
//     remainingBalance = (remainingBalance - amountToPrincipal).toFixed(2);

//     // Making NON-YEAR rows of table
//     rows.push(
//       <tr key={rowsKey}>
//         <td className="fw-bold">{date.format("MMM")}</td>
//         <td>{currencyFormatter.format(amountToPrincipal)}</td>
//         <td>{currencyFormatter.format(amountToInterest)}</td>
//         <td className="fw-bold">
//           {currencyFormatter.format(remainingBalance)}
//         </td>
//       </tr>
//     );

//     // Increasing month
//     date = date.add(1, "M");

//     // Increasing key used on rows array elements, so unique for React
//     rowsKey += 1;
//   }

//   // Making LAST ROW of table if remainingBalance <= monthlyRepaymentAmount (Final payment)
//   rows.push(
//     <tr key={rowsKey}>
//       <td className="fw-bold">{date.format("MMM")}</td>
//       <td>{currencyFormatter.format(remainingBalance)}</td>
//       <td>{currencyFormatter.format(0)}</td>
//       <td className="fw-bold">{currencyFormatter.format(0)}</td>
//     </tr>
//   );

//   // Rendering/displaying the rows of table
//   return rows;
// };

