import { Pagination } from "react-bootstrap";
import "./ProductList.css";
import { PaginationItem, PaginationLink } from "reactstrap";

const ProductList = () => {
  return (
    <div className="list-shop">
      <div>
        <input className="input-shop" placeholder="Enter Search Heare!"></input>
      </div>
      <div>
        <select name="sort-product">
          <option value="default-sort">Default sorting</option>
          <option value="name-sort">Name</option>
          <option value="low-price">Price low to high</option>
          <option value="high-price">Price high to low</option>
        </select>
      </div>
      <div>
        <Pagination aria-label="Page navigation example" size="sm">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" previous />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">1</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" next />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" last />
          </PaginationItem>
        </Pagination>
      </div>
    </div>
  );
};

export default ProductList;
