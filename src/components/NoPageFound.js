//React Router Imports
import { useNavigate } from "react-router-dom";
// React Bootstrap Imports
import { Button, Col } from "react-bootstrap";
// Component Imports
import Footer from "./Footer";

function NoPageFound() {
  const navigate = useNavigate();

  return (
    <>
      <Col className="text-center mt-5">
        <h1 className="">Page Not Found</h1>
        <Button
          type="button"
          variant="secondary"
          onClick={() => navigate(-1) || navigate("/")}
        >
          GO BACK
        </Button>
      </Col>
      <Footer addClass="fixed-bottom" />
    </>
  );
}

export default NoPageFound;
