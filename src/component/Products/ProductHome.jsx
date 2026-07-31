import MoreInfo from "./MoreInfo";
import Popup from "../modal/Popup";
import { useSelector, useDispatch } from "react-redux";
import { showPopup, hidePopup } from "../../store/toggleSlice";
import { ProductCard } from "../ui/ProductCard";

const Products = (props) => {
  const dispatch = useDispatch();
  const listOne = useSelector((state) => state.toggle.data);

  const deletePopuphandler = () => {
    dispatch(hidePopup());
  };

  return (
    <div className="bg-slate-50">
      {listOne && <Popup delete={deletePopuphandler} data={listOne} />}
      <div className="py-12 sm:py-16">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex flex-col md:flex-row md:items-end justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
                TOP TRENDING PRODUCTS
              </p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Best Seller Collection
              </h2>
            </div>
            <p className="text-xs text-slate-500 mt-2 md:mt-0">
              Click any product for quick view & details
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
            {props.product.map((pro, index) => (
              <div key={index.toString()}>
                <ProductCard
                  image={pro.img1}
                  name={pro.name}
                  price={pro.price}
                  onClick={() => {
                    dispatch(showPopup(pro));
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <MoreInfo />
    </div>
  );
};

export default Products;

