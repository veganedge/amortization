//React Router Imports
import { useNavigate } from "react-router-dom";
// React Bootstrap Imports
import { Container, Button, Row, Col, Card } from "react-bootstrap";
// Component Imports
import Footer from "./Footer";

function NoPageFound() {
  const navigate = useNavigate();

  return (
    <>
      <Container className="mt-5 text-center">

        {/* CARD CONTAINING 404 ERROR PAGE */}
        <Row className="justify-content-center">
          <Col xs={10} md={8} lg={6} xl={5} xxl={4}>
            <Card bg="light" border="secondary" className="shadow-lg">
              <Card.Header className="text-center">
                <h2>Page Not Found</h2>
              </Card.Header>

              {/* GO BACK BUTTON */}
              <Card.Body>
                <Button
                  type="button"
                  variant="secondary"
                  className="mt-5"
                  // TAKES TO PREVIOUS PAGE IN BROWSER HISTORY OR BASIC.JS
                  onClick={() => navigate(-1) || navigate("/")}
                >
                  GO BACK
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      
      {/* FOOTER COMPONENT SHOWN AS FIXED */}
      <Footer addClass="fixed-bottom" />
    </>
  );
}

export default NoPageFound;
