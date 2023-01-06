// React Bootstrap Imports
import { Accordion, Table } from "react-bootstrap";
// DayJS Imports
import * as dayjs from "dayjs";


// INITIALIZING GLOBALLY SCOPED ITEMS
//=====================================================================================================================


// Creating currency formatter
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

// Allows custom format when parsing from dayjs date object (customParseFormat is necessary for format we want)
const customParseFormat = require("dayjs/plugin/customParseFormat");
dayjs.extend(customParseFormat);

// computeMonthlyData:
// CREATES 1 MONTH'S REPAYMENT DATA
// INPUTS (minimum data needed to do this):
// amountToInterest,
// amountToPrincipal,
// remainingBalance,
// date object representing which month this payment is for
// OUTPUT:
// A single month's repayment data, shaped like this:
// {
//   amountToInterest,
//   amountToPrincipal,
//   remainingBalance: newRemainingBalance,
//   month: date.format("MMM"),
// }
const computeMonthlyData = ({
  remainingBalance,
  monthlyRepaymentAmount,
  monthlyInterestRate,
  date,
}) => {
  // Calculations to simulate a monthly payment
  let amountToInterest = 0;
  let amountToPrincipal = remainingBalance;
  // if statement needed to calculate final monthly payment
  if (remainingBalance > monthlyRepaymentAmount) {
    amountToInterest = (remainingBalance * monthlyInterestRate).toFixed(2);
    amountToPrincipal = (monthlyRepaymentAmount - amountToInterest);
  }
  let newRemainingBalance = (remainingBalance - amountToPrincipal);

  // return this month's repayment data - from above calculations
  let monthResult = {
    amountToInterest,
    amountToPrincipal,
    remainingBalance: newRemainingBalance,
    month: date.format("MMM"),
  };

  return monthResult;
};

// getLoanLifetimeRepaymentData:
// CREATES A DATA STRUCTURE holding all of our repayment data in an easy to use format
// INPUTS (minimum data needed to do this):
// loanDate,
// loanAmount,
// monthlyRepaymentAmount,
// monthlyInterestRate
// OUTPUT:
// An array, keyed by YEAR, containing arrays of each month's payment/loan data over the life of the loan
const getLoanLifetimeRepaymentData = ({
  loanDate,
  loanAmount,
  monthlyRepaymentAmount,
  monthlyInterestRate,
}) => {
  // Before simulating each month's payment, remaining balance is the total loan amount
  let remainingBalance = loanAmount;

  // Date of first payment due (a month after loan is received)
  // This custom format is possible due to line 19-21
  let date = dayjs(loanDate, "YYYY-MM").add(1, "M");

  // Holds all repayment data by year and month. (our return object)
  let repaymentDataByYear = [];

  // Holds all the monthRepaymentData objects for a given year, overwritten each year
  let singleYearData = [];

  // Used in if condition to add a full singleYearData array into the repaymentDataByYear array
  let lastYearChecked = date.get("y");

  let pushedYear = false;

  // Simulate each month's payment until remaining balance is 0
  while (remainingBalance > 0) {
    // object holding this month's repayment data
    let thisMonthsData = computeMonthlyData({
      remainingBalance,
      monthlyRepaymentAmount,
      monthlyInterestRate,
      date,
    });

    pushedYear = false;

    // Add current month to the current year's data:
    singleYearData.push(thisMonthsData);

    // Update the new remaining balance for the next iteration
    remainingBalance = thisMonthsData.remainingBalance;

    // Increase month for next iteration in while loop
    date = date.add(1, "month");

    if (lastYearChecked !== date.get("y")) {
      // if (iterated into a new year) {
      repaymentDataByYear.push({ [lastYearChecked]: singleYearData });
      // Reset single year data and enter the new year's month:
      singleYearData = [];
      lastYearChecked = date.get("y");
      pushedYear = true;
    }
  }

  // When loop is done, push the remaining year's data:
  if (!pushedYear) {
    repaymentDataByYear.push({ [date.format("YYYY")]: singleYearData });
  }

  return repaymentDataByYear;
};


// MAIN REACT COMPONENT DEFINITION THAT WILL BE RETURNED BY THIS FILE
//=====================================================================================================================

// LoanRepaymentDataAccordion:
// INPUTS (minimum data needed to do this):
// loanDate,
// loanAmount,
// monthlyRepaymentAmount,
// monthlyInterestRate
// OUTPUT:
// Each year's worth of repayment data will be displayed inside an accordion
const LoanRepaymentDataAccordion = ({
  loanDate,
  loanAmount,
  monthlyRepaymentAmount,
  monthlyInterestRate,
}) => {


  //1. FETCH THE DATA needed to show in the accordions
  //=========================================================================

  let repaymentDataByYear = getLoanLifetimeRepaymentData({
    loanDate,
    loanAmount,
    monthlyRepaymentAmount,
    monthlyInterestRate,
  });


  //2. CODE TO CREATE THE DATA AS ACCORDIONS OF TABLES
  //=========================================================================


  //2a. INITIALIZE EVERYTHING NEEDED
  //======================

  // Holds accordion elements separated by year
  const dataAsAccordion = [];
  // Necessary to set a defaultActiveKey on first accordion so it's open onmount to start
  let eventKey = 0;


  //2b. DEFINE ALL FUNCTIONS used in 3 (Render data to page)
  //======================

  const createDataAsAccordion = () => {
    repaymentDataByYear.forEach((yearOfData) => {
      const year = Object.keys(yearOfData)[0];
      // Holds table body rows separated by month
      const monthlyTableRows = [];
      
      // Creating MONTHLY rows for Table Body & storing in "monthlyTableRows" array
      for (let i = 0; i < yearOfData[year].length; i++) {
        let monthlyData = yearOfData[year][i];
        let month = yearOfData[year][i].month;
        monthlyTableRows.push(
          <tr key={month}>
            <td>{month}</td>
            <td>{`${currencyFormatter.format(monthlyData.amountToPrincipal)}`}</td>
            <td>{`${currencyFormatter.format(monthlyData.amountToInterest)}`}</td>
            <td>{`${currencyFormatter.format(monthlyData.remainingBalance)}`}</td>
          </tr>
        );
      }

      // Creating YEARLY Accordions with Table & storing in "displayDataAsAccordion" array
      dataAsAccordion.push(
        <Accordion.Item eventKey={eventKey} key={year}>
          <Accordion.Header>{year}</Accordion.Header>
          <Accordion.Body>
            <Table
              striped
              bordered
              hover
              size="sm"
              className="border-dark text-center"
            >
              <thead>
                <tr >
                  <th>Month</th>
                  <th>Amount To Principal</th>
                  <th>Amount To Interest</th>
                  <th>Loan Balance Remaining</th>
                </tr>
              </thead>
              <tbody>{monthlyTableRows}</tbody>
            </Table>
          </Accordion.Body>
        </Accordion.Item>
      );
      eventKey++;

    });
  };


  //3. RENDER DATA TO PAGE
  //=========================================================================

  return (
    // defaultActiveKey prop makes first year open onmount
    <Accordion defaultActiveKey={0}>
      {createDataAsAccordion()}
      {dataAsAccordion}
    </Accordion>
  );
};

export default LoanRepaymentDataAccordion;
