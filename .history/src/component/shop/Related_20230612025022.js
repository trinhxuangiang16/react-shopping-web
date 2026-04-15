const Related = (props) => {
  return (
    <div className="wrap-relate">
      <div className="detail-relate">
        <h4>RELATED PRODUCTS</h4>
        <div>
          <img
            className="related-img"
            src={props.dataRelated && props.dataRelated[0].img1}
            alt="dataRelated"
          />
          <h5>{props.dataRelated && props.dataRelated[0].name}</h5>
          <p>
            {props.dataRelated && props.dataRelated[0].price.toLocaleString()}
            VND
          </p>
        </div>
      </div>
    </div>
  );
};

export default Related;
