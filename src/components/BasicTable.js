// React Bootstrap Imports
import { Table, Col, Row } from "react-bootstrap";
// Component Imports
import TableBody from "./TableBody";

const BasicTable = ({
  loanDate,
  loanAmount,
  monthlyRepaymentAmount,
  monthlyInterestRate,
  termLength
}) => {
  return (
    <>
      <Row className="justify-content-center">
        <Col lg={7}>
          <Table
            striped
            bordered
            hover
            size="sm"
            className="border-dark text-center"
          >
            {/* TABLE HEADINGS */}
            <thead>
              <tr>
                <th>Month</th>
                <th>Amount to Principal</th>
                <th>Amount to Interest</th>
                <th>Remaining Balance</th>
              </tr>
            </thead>

            {/* DYNAMIC TABLE BODY BASED ON INFO FROM BASIC.JS */}
            <tbody>
              <TableBody
                loanDate={loanDate}
                loanAmount={loanAmount}
                monthlyRepaymentAmount={monthlyRepaymentAmount}
                monthlyInterestRate={monthlyInterestRate}
                termLength={termLength}
              />
            </tbody>
          </Table>
        </Col>
      </Row>
    </>
  );
};

export default BasicTable;
