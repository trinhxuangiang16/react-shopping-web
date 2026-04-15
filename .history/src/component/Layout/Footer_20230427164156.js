import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col className="bg"></Col>
        <Col className="bg">
          <h5>CUSTOMER SERVICES</h5>
          <p>Help & Contact Us</p>
          <p>Returns & Refunds</p>
          <p>Online Stores</p>
          <p>Terms & Conditions</p>
        </Col>
        <Col className="bg">
          <h5>COMPANY</h5>
          <p>What We Do</p>
          <p>Available Services</p>
          <p>Latest Posts</p>
          <p>FAQs</p>
        </Col>
        <Col className="bg">
          <h5>COMPANY</h5>
          <p>What We Do</p>
          <p>Available Services</p>
          <p>Latest Posts</p>
          <p>FAQs</p>
        </Col>
        <Col className="bg"></Col>
      </Row>
    </Container>
  );
};
export default Footer;
