// React Bootstrap Imports
import { Button, Col } from "react-bootstrap";


function NoPageFound() {
  return (
    <>
      <Col className="text-center mt-5">
        <h1>Page Not Found</h1>
        {/* MAKE THIS ONCLICK WORK */}
        <Button type="button" variant="secondary">GO BACK</Button>
      </Col>
    </>
  );
}

export default NoPageFound;
