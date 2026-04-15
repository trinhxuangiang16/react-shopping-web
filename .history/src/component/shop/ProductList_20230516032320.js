import { Placeholder } from "react-bootstrap";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="list-shop">
      <select name="cars" id="cars">
        <option value="default-sort">Default sorting</option>
        <option value="name-sort">Name</option>
        <option value="low-price">Price low to high</option>
        <option value="high-price">Price high to low</option>
      </select>
    </div>
  );
};

export default ProductList;
