import { Placeholder } from "react-bootstrap";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="list-shop">
      <>
        <Placeholder animation="glow" tag="p">
          <Placeholder xs={12} />
        </Placeholder>
        <Placeholder animation="wave" tag="p">
          <Placeholder xs={12} />
        </Placeholder>
      </>
    </div>
  );
};

export default ProductList;
