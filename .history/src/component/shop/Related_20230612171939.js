const Related = (props) => {
  return (
    <div className="display-relate">
      {/* <div className="detail-relate"> */}
      <h4>RELATED PRODUCTS</h4>
      <div>
        <img
          className="related-img"
          src={props.dataRelated && props.dataRelated.img1}
          alt="dataRelated"
        />
        <h5>{props.dataRelated && props.dataRelated.name}</h5>
        <p>
          {props.dataRelated && props.dataRelated.price.toLocaleString()}
          VND
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Related;
