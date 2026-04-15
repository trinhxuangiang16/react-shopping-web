import React from "react";
import { Col, Row } from "react-bootstrap";
import "./Popup.css";
function Popup(props) {
  return (
    <div className="popup-box">
      <div className="overlay" onClick={props.delete}></div>
      <div className="box">
        <div>
          <button className="btn-close" onClick={props.delete}></button>
        </div>
        <Row className="popup-detail">
          <Col className="bg" xs="6">
            <img src={props.data.img} alt="san pham" />
          </Col>
          <Col className="bg popup-text" xs="6">
            <h5>{props.data.name}</h5>
            <p className="popup-price">
              {props.data.price.toLocaleString()} VND
            </p>
            <p className="short">
              {props.data.longDesc.replace(/(\rM\r)/gm, "")}
            </p>
            <button>
              <i className="fa-solid fa-cart-shopping"></i> View Detail
            </button>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Popup;

// import React from "react";
// import { Col, Row } from "react-bootstrap";

// const Popup = (props) => {
//   return (
//     <div id="id01" className="w3-modal">
//       <div className="w3-modal-content">
//         <div className="w3-container">
//           <span
//             onclick={(document.getElementById("id01").style.display = "none")}
//             className="w3-button w3-display-topright"
//           >
//             &times;
//           </span>

//           <header style={{ width: "500px", height: "800px" }}>
//             <Row>
//               <Col className="bg" xs="6">
//                 <img src={props.data.img} alt="san pham" />
//               </Col>
//               <Col className="bg" xs="6">
//                 <h5>{props.data.name}</h5>
//                 <p>{props.data.price}</p>
//                 <p>{props.data.longDesc}</p>
//                 <button>View Detail</button>
//               </Col>
//             </Row>
//           </header>
//         </div>
//       </div>
//     </div>
//   );
// };

// // export default Popup;
