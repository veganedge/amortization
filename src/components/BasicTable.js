// React Bootstrap Imports
import { Table, Col, Row } from "react-bootstrap";
// Component Imports
import TableBody from "./TableBody";

const BasicTable = ({
  loanAmount,
  monthlyRepaymentAmount,
  monthlyInterestRate,
}) => {

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

            {/* TABLE HEADINGS */}
            <thead>
              <tr>
                <th>Month</th>
                <th>Amount to Principal</th>
                <th>Amount to Interest</th>
                <th>Remaining Balance</th>
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

export default BasicTable;
