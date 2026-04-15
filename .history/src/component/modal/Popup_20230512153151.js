import React from "react";
import { Col, Row } from "react-bootstrap";

function Popup(props) {
  return (
    <div>
      <Row>
        <Col className="bg" xs="6">
          <img src={props.data.img} alt="san pham" />
        </Col>
        <Col className="bg" xs="6">
          <h5>{props.data.name}</h5>
          <p>{props.data.price}</p>
          <p>{props.data.longDesc}</p>
          <button>View Detail</button>
        </Col>
      </Row>
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
