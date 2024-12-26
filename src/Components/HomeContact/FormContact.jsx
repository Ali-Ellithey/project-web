import React from "react";
import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/esm/Row";

export const FormContact = () => {
  return (
    <div className="FormContact" id="#AboutUs">
      <div className="title">
        <h5>Contact Us</h5>
        <h1>Feel free to message us</h1>
      </div>
      <Container>
          <Form>
            <Row>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicName">
                  <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicPhone">
                  <Form.Control type="text" placeholder="Enter phone number" />
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email..." />
                  <Form.Text className="text-muted">
                  </Form.Text>
                </Form.Group>
              </Col>
              <Col lg={6}>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Control type="password" placeholder="Password..." />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Control as="textarea" placeholder="Your Massage..." rows={3} />
            </Form.Group>
            <Button className="Submit" type="submit">
              Submit
            </Button>
          </Form>
      </Container>
    </div>
  );
};

export default FormContact;
