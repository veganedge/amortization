// React Bootstrap Imports
import { Table, Col, Container, Row } from "react-bootstrap";

const BasicTable = () => {
    return (
        <>
            <Row className="justify-content-center" >
                <Col lg={10}>
                    <Table striped bordered hover size="sm" className="border-dark text-center">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Principal</th>
                                <th>Interest</th>
                                <th>Remaining Loan Balance</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th colSpan={4} className="table-dark">2022</th>
                            </tr>
                            <tr>
                                <td>July</td>
                                <td>$AmountToPrincipal</td>
                                <td>$AmountToInterest</td>
                                <td>$LoanBalance - ($AmountToPrincipal + $AmountToInterest)</td>
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
                                <th colSpan={4} className="table-dark">2023</th>
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
}

export default BasicTable;