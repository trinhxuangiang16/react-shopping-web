import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

function Popup(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger" onClick={toggle}>
        Click Me
      </Button>
      <Modal isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
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

// export default Popup;
