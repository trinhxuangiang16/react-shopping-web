import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="bg">.col1</Col>
        <Col className="bg">.col2</Col>
        <Col className="bg-light">.col3</Col>
      </Row>
    </Container>
  );
};
export default Footer;
