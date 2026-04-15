import { Placeholder } from "react-bootstrap";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="list-shop">
      <select name="cars" id="cars">
        <option value="volvo">Default sorting</option>
        <option value="saab">Name</option>
        <option value="opel">Opel</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
};

export default ProductList;
