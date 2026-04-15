import { Placeholder } from "react-bootstrap";
import "./ProductList.css";

const ProductList = () => {
  return (
    <div className="list-shop">
      <select name="cars" id="cars">
        <option value="default-sort">Default sorting</option>
        <option value="name-sort">Name</option>
        <option value="opel">Price low to high</option>
        <option value="audi">Price high to low</option>
      </select>
    </div>
  );
};

export default ProductList;
