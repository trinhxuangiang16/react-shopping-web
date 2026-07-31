import { useNavigate } from "react-router-dom";
import { ProductCard } from "../ui/ProductCard";

const ProductList = (props) => {
  const navigate = useNavigate();

  return (
    <ProductCard
      key={props.key}
      image={props.data.img1}
      name={props.data.name}
      price={props.data.price}
      onClick={() => {
        navigate(`/detail/${props.data.id.$oid}`);
      }}
    />
  );
};

export default ProductList;
