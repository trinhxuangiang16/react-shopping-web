import { Col, InputGroup, Row } from "react-bootstrap";
import "./MoreInfo.css";
const MoreInfo = () => {
  return (
    <div className="wrap-more">
      <div className="shipping">
        <Row>
          <Col className="bg">
            <h5>FREE SHIPPING</h5>
            <p>Free shipping worlwide</p>
          </Col>
          <Col className="bg">
            <h5>24 X 7 SERVICE</h5>
            <p>Free shipping worlwide</p>
          </Col>
          <Col className="bg">
            <h5>FESTIVAL OFFER</h5>
            <p>Free shipping worlwide</p>
          </Col>
        </Row>
      </div>
      <div className="email">
        <Row>
          <Col className="bg" xs="6">
            <h5>LET'S BE FRIENDS!</h5>
            <p>Nisi nisi tempor consequat laboris nisi.</p>
          </Col>
          <Col className="bg" xs="6">
            <InputGroup>
              <input />
              <button>To the Right!</button>
            </InputGroup>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default MoreInfo;
