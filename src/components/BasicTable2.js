// // React Bootstrap Imports
// import { Table, Col, Row, Button, Accordion } from "react-bootstrap";
// // DayJS Imports
// import * as dayjs from "dayjs";
// // Component Imports
// import TableBody from "./TableBody";

// const BasicTable2 = ({
//   loanDate,
//   loanAmount,
//   monthlyRepaymentAmount,
//   monthlyInterestRate,
// }) => {

//   // Creating currency formatter
//   let currencyFormatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//     minimumFractionDigits: 2,
//     maximumFractionDigits: 2,
//   });

//   // Initializing variables for table
//   let tables = [];
//   let remainingBalance = loanAmount;
//   let rowsKey = 1;
//   // Initialize date variable for table
//   const customParseFormat = require('dayjs/plugin/customParseFormat')
//   dayjs.extend(customParseFormat);
//   let date = dayjs(loanDate, "YYYY-MM").add(1, "M"); // first payment due a month after loan is received


//   // ======= START TABLES by year =======
//   // Making rows of table (except last row)
//   while (remainingBalance > 0) {
//     // Making YEAR row without calculations
//     if (date.get("M") === 0 || tables.length === 0) {
//       // if month is JAN || if it's the VERY FIRST ROW OF TABLE
//       tables.push(
//         <Accordion>
//           <tr key={rowsKey}>
//             <td colSpan="4">
//               <div className="d-grid gap-2">
//                 <Button variant="dark" className="table-button fw-bold" size="sm">
//                   {date.format("YYYY")}
//                 </Button>
//               </div>
//             </td>
//           </tr>
//         </Accordion>
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
//   return tables;


//   // return (
//   //   <>
//   //     <Row className="justify-content-center">
//   //       <Col lg={7}>
//   //         <Table
//   //           striped
//   //           bordered
//   //           hover
//   //           size="sm"
//   //           className="border-dark text-center"
//   //         >
//   //           {/* TABLE HEADINGS */}
//   //           <thead>
//   //             <tr>
//   //               <th>Month</th>
//   //               <th>Amount to Principal</th>
//   //               <th>Amount to Interest</th>
//   //               <th>Remaining Balance</th>
//   //             </tr>
//   //           </thead>

//   //           {/* DYNAMIC TABLE BODY BASED ON INFO FROM BASIC.JS */}
//   //           <tbody>
//   //             <TableBody
//   //               loanDate={loanDate}
//   //               loanAmount={loanAmount}
//   //               monthlyRepaymentAmount={monthlyRepaymentAmount}
//   //               monthlyInterestRate={monthlyInterestRate}
//   //             />
//   //           </tbody>
//   //         </Table>
//   //       </Col>
//   //     </Row>
//   //   </>
//   // );
// };

// export default BasicTable2;
