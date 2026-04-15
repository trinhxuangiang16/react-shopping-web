import "./ProductList.css";

const ProductList = (props) => {
  return (
    <div>
      <div key={index.toString()} className="box-product">
        <img
          src={pro.img}
          alt="products"
          onClick={() => {
            dispatch({ type: "SHOW_POPUP", data: pro });
            console.log(pro);
          }}
          style={{ width: "100%" }}
          className="img-product"
        />
        <h4>{pro.name}</h4>
        <p>{pro.price.toLocaleString()} VND</p>
      </div>
    </div>
  );
};

export default ProductList;
