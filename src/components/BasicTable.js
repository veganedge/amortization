// React Bootstrap Imports
import { Table, Col, Row, Button } from "react-bootstrap";

const BasicTable = ({ loanAmountValue, monthlyRepaymentAmount, monthlyInterestRate }) => {
  //   ISSUES FOR THIS COMPONENT
  // - create table rows, header for year, cells for month/amount to principal/amount to interest/loan balance based on info from Basic
  // - maybe make table collapsible/expandable by year if possible (check this- https://www.bankrate.com/mortgages/amortization-calculator/ click SCHEDULE tab)

  let amountToInterest = loanAmountValue * monthlyInterestRate;
  let amountToPrincipal = monthlyRepaymentAmount - amountToInterest;
  let loanBalance = loanAmountValue - monthlyRepaymentAmount;

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
            <thead>
              <tr>
                <th>Date</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Remaining Loan Balance</th>
              </tr>
            </thead>
            {/* create body based on info from Basic.js */}
            <tbody>
              <tr>
                <th colSpan={4}>
                  <div className="d-grid gap-2">
                    <Button type="button" variant="dark" size="sm">
                      2022
                    </Button>
                  </div>
                </th>
              </tr>
              <tr>
                <td>July</td>
                <td>${amountToPrincipal.toFixed(2)}</td>
                <td>${amountToInterest.toFixed(2)}</td>
                <td>${loanBalance.toFixed(2)}</td>
              </tr>
              <tr>
                <td>August</td>
                <td>$AmountToPrincipal</td>
                <td>$AmountToInterest</td>
                <td>$LoanBalance - ($AmountToPrincipal + $AmountToInterest)</td>
              </tr>
              <tr>
                <td>September</td>
                <td>$AmountToPrincipal</td>
                <td>$AmountToInterest</td>
                <td>$LoanBalance - ($AmountToPrincipal + $AmountToInterest)</td>
              </tr>
              <tr>
                <td>October</td>
                <td>$AmountToPrincipal</td>
                <td>$AmountToInterest</td>
                <td>$LoanBalance - ($AmountToPrincipal + $AmountToInterest)</td>
              </tr>
              <tr>
                <td>November</td>
                <td>$AmountToPrincipal</td>
                <td>$AmountToInterest</td>
                <td>$LoanBalance - ($AmountToPrincipal + $AmountToInterest)</td>
              </tr>
              <tr>
                <td>December</td>
                <td>$AmountToPrincipal</td>
                <td>$AmountToInterest</td>
                <td>$LoanBalance - ($AmountToPrincipal + $AmountToInterest)</td>
              </tr>
              <tr>
                <th colSpan={4}>
                  <div className="d-grid gap-2">
                    <Button type="button" variant="dark" size="sm">
                      2023
                    </Button>
                  </div>
                </th>
              </tr>
              <tr>
                <td>January</td>
                <td>$AmountToPrincipal</td>
                <td>$AmountToInterest</td>
                <td>$LoanBalance - ($AmountToPrincipal + $AmountToInterest)</td>
              </tr>
              <tr>
                <td>February</td>
                <td>$AmountToPrincipal</td>
                <td>$AmountToInterest</td>
                <td>$LoanBalance - ($AmountToPrincipal + $AmountToInterest)</td>
              </tr>
              <tr>
                <td>March</td>
                <td>$AmountToPrincipal</td>
                <td>$AmountToInterest</td>
                <td>$LoanBalance - ($AmountToPrincipal + $AmountToInterest)</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default BasicTable;
