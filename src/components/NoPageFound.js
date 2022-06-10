import { Button, Col } from "react-bootstrap";

function NoPageFound() {
  return (
    <>
      {/* Justify Content is not working on button */}
      <Col className="text-center mt-5">
        <h1 className="text-center">Page Not Found</h1>
        <Button variant="secondary" className="text-center">GO BACK</Button>
      </Col>
    </>
  );
}

export default NoPageFound;
