import "./Related.css";
const Related = (props) => {
  return (
    <div>
      <img
        className="related-img"
        src={props.dataRelated && props.dataRelated.img1}
        alt="dataRelated"
      />
      <h5 className="name-relate">
        {props.dataRelated && props.dataRelated.name}
      </h5>
      <p className="price-relate">
        {props.dataRelated && props.dataRelated.price.toLocaleString()}
        VND
      </p>
    </div>
  );
};

export default Related;
