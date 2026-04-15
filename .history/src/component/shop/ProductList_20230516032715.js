import "./ProductList.css";

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
    </div>
  );
};

export default ProductList;
