// React Bootstrap Imports
import { Accordion, Table } from "react-bootstrap";
// DayJS Imports
import * as dayjs from "dayjs";


// Creating currency formatter
const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});


const LoanRepaymentDataAccordion = ({
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
  let originalDate = dayjs(loanDate, "YYYY-MM").add(1, "M");

  // Holds all repayment data by year and month, allowing easy access to display it any desired way (table, accordion, etc)
  const repaymentDataByYear = [];

  // Holds each month's repayment data
  let monthlyRepaymentData = {};

  // Holds all the monthRepaymentData objects for a given year
  let singleYearData = [];

  // Used in if condition to add a full singleYearData array into the repaymentDataByYear array
  let lastYearChecked = date.format("YYYY");


  //1b. DEFINE ALL FUNCTIONS used in 1c (Creating data)
  //==============

  // Create current month
  const computeMonthlyData = () => {
    // Calculations to simulate a monthly payment - if statement needed for final monthly payment
    let amountToInterest = (0).toFixed(2);
    let amountToPrincipal = remainingBalance;
    if (remainingBalance > monthlyRepaymentAmount) {
      amountToInterest = (remainingBalance * monthlyInterestRate).toFixed(2);
      amountToPrincipal = (monthlyRepaymentAmount - amountToInterest).toFixed(2);;
    }
    remainingBalance = (remainingBalance - amountToPrincipal).toFixed(2);
    // This month's repayment data - from above calculations
    monthlyRepaymentData = {
      amountToInterest,
      amountToPrincipal,
      remainingBalance,
      month: date.format("MMM"),
    };
  };

  // Add current month to the current year's data:
  const addMonthlyDataToYearData = () => {
    singleYearData.push(monthlyRepaymentData);
    // Increasing month
    date = date.add(1,'month');
  };

  // Add previous year's data to total data array
  const addPreviousYearData = () => {
    repaymentDataByYear.push({ [lastYearChecked]: singleYearData });
    // Reset our single year data and enter the new year's month:
    singleYearData = [];
    lastYearChecked = date.format("YYYY");
  };

  // Add final year to total data array
  const addFinalYearData = () => {
    repaymentDataByYear.push({ [date.format("YYYY")]: singleYearData });
  };


  //1c. CREATE DATA
  //==============

  while (remainingBalance > 0) {
    computeMonthlyData();
    if (lastYearChecked !== date.format("YYYY")) {
      // if (iterated into a new year) {
      addPreviousYearData();
    }
    addMonthlyDataToYearData();
  }
  addFinalYearData();

  
  //2. CREATE THE CODE TO RENDER/DISPLAY THE DATA -- table/accordion/etc
  //=====================================================================================================================


  //2a. INITIALIZE EVERYTHING NEEDED
  //==============

  // Holds accordion elements separated by year
  const dataAsAccordion = [];

  // Initialize all needed keys so React sees each entry in table as separate entity so less re-renders
  let eventKey = 0;
  let reactKey = 0;
  let tableHeaderRowsKey = 0;
  let monthlyTableRowsKey = 0;


  //2b. DEFINE ALL FUNCTIONS used in 2c (Create display)
  //==============

  const createDataAsAccordion = () => {
    repaymentDataByYear.forEach( (yearOfData) => {
      const year = originalDate.format("YYYY");
      // Holds table body rows separated by month
      const monthlyTableRows = [];
      // Creating MONTHLY rows for Table Body & storing in "rows" array
      for (let i=0; i<yearOfData[year].length; i++) {
        monthlyTableRows.push(
          <tr key={monthlyTableRowsKey}>
            <td>{yearOfData[year][i].month}</td>
            <td>{`${currencyFormatter.format(yearOfData[year][i].amountToPrincipal)}`}</td>
            <td>{`${currencyFormatter.format(yearOfData[year][i].amountToInterest)}`}</td>
            <td>{`${currencyFormatter.format(yearOfData[year][i].remainingBalance)}`}</td>
          </tr>
        );
        // Increasing key used on rows array elements, so unique for React
        monthlyTableRowsKey += 1;
      };

      // Creating YEARLY Accordions with Table & storing in "displayDataAsAccordion" array
      dataAsAccordion.push(
        <Accordion.Item eventKey={eventKey} key={reactKey}>
          <Accordion.Header>{year}</Accordion.Header>
          <Accordion.Body>
            <Table striped
            bordered
            hover
            size="sm"
            className="border-dark text-center">
              <thead>
                <tr key={tableHeaderRowsKey}>
                  <th>Month</th>
                  <th>Amount To Principal</th>
                  <th>Amount To Interest</th>
                  <th>Loan Balance Remaining</th>
                </tr>
              </thead>
              <tbody>
                {monthlyTableRows}
              </tbody>
            </Table>
            </Accordion.Body>
        </Accordion.Item>
      );
      // Increasing keys used on rows array elements, so unique for React
      eventKey++;
      reactKey++;
      tableHeaderRowsKey++;
      // Iterating to next year
      originalDate = originalDate.add(1, 'y');
    });
  };


  //2c. CREATE DISPLAY
  //==============
  createDataAsAccordion();



  //==================== USE THIS AS INSPIRATION ==============================
  // var AcEntry = React.createClass({
  //   render(){
  //     const {name,text,...other} = this.props;
  //     return(
  //       <Panel {...other} header={name}>
  //         {text}
  //       </Panel>
  //       )
  //   }
  // });

  // var App = React.createClass({
  //   render(){
  //     var entries=[
  //       {id:1, name: "first entry", text:"first sample text"},
  //       {id:2, name: "send entry", text:"second sample text"},
  //     ];
  //     var rows=[];
  //     for(var i=0; i<entries.length; i++){
  //       var entry=entries[i];
  //       rows.push(<AcEntry eventKey={entry.id} name={entry.name} text={entry.text} />)
  //     }

  //     return (
  //       <Accordion>
  //        {rows}
  //       </Accordion>
  //     )
  //   }
  // });



  //3. RENDER DATA TO PAGE
  //=======================================================================================================================

  return (

    // defaultActiveKey prop makes first year open onmount
    <Accordion defaultActiveKey={0}>
      {dataAsAccordion}
    </Accordion>

  );
};

export default LoanRepaymentDataAccordion;
