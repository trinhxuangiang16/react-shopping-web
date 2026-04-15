import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col className="bg">
          <h4>CUSTOMER SERVICES</h4>
          <p>Help & Contact Us</p>
        </Col>
        <Col className="bg">.col2</Col>
        <Col className="bg">.col3</Col>
      </Row>
    </Container>
  );
};
export default Footer;
