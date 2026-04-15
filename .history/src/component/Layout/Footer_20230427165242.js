import { Col, Container, Row } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container className="footer">
      <Row>
        <Col className="bg"></Col>
        <Col className="bg">
          <h6>CUSTOMER SERVICES</h6>
          <p>Help & Contact Us</p>
          <p>Returns & Refunds</p>
          <p>Online Stores</p>
          <p>Terms & Conditions</p>
        </Col>
        <Col className="bg">
          <h6>COMPANY</h6>
          <p>What We Do</p>
          <p>Available Services</p>
          <p>Latest Posts</p>
          <p>FAQs</p>
        </Col>
        <Col className="bg">
          <h6>SOCIAL MEDIA</h6>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Facebook</p>
          <p>Pinterest</p>
        </Col>
        <Col className="bg"></Col>
      </Row>
    </Container>
  );
};
export default Footer;
