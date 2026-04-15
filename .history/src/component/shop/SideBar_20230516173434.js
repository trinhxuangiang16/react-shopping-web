import "./SideBar.css";

const SideBar = () => {
  const [newList, setNewList] = useState(null);

  const showIphoneHandler = () => {
    setNewList(null);
  };

  return (
    <div className="side-shop">
      <h4>CATEGORIES</h4>
      <ul>
        <li className="brand">APPLE</li>
        <li className="type-product">ALL</li>
        <li className="title-product">IPHONE & MAC</li>
        <li className="type-product" onClick={showIphoneHandler}>
          Iphone
        </li>
        <li className="type-product">Ipod</li>
        <li className="type-product">Macbook</li>
        <li className="title-product">WIRELESS</li>
        <li className="type-product">Airpod</li>
        <li className="type-product">Watch</li>
        <li className="title-product">OTHER</li>
        <li className="type-product">Mouse</li>
        <li className="type-product">Keyboard</li>
        <li className="type-product">Other</li>
      </ul>
    </div>
  );
};

export default SideBar;
