import "./Collection.css";

const Collection = () => {
  return (
    <div className="wrap-collec">
      <div className="collection">
        <div className="text-collec">
          <p>CAREFULLY CREATED COLLECTION</p>
          <h5>BROWSE OUR CATEGORIES</h5>
        </div>
        <div className="list-1">
          <img src="./images/product_1.png" alt="cell phone" width="48.5%" />
          <img src="./images/product_2.png" alt="cell phone" width="48.5%" />
        </div>
        <div className="list-2">
          <img src="./images/product_3.png" alt="cell phone" width="32%" />
          <img src="./images/product_4.png" alt="cell phone" width="32%" />
          <img src="./images/product_5.png" alt="cell phone" width="32%" />
        </div>
      </div>
    </div>
  );
};

export default Collection;
