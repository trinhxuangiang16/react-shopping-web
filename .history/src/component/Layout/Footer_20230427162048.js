import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  return (
    <Container>
      <Row>
        <Col className="bg-light">.col1</Col>
        <Col className="bg-light border">.col2</Col>
        <Col className="bg-light border">.col3</Col>
      </Row>
    </Container>
  );
};
export default Footer;
