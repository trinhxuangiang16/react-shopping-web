import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

const Collection = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleCategoryClick = (category) => {
    navigate("/shop");
    dispatch({
      type: "FILTER",
      payload: { data: props.product, category: category },
    });
  };

  return (
    <div className="py-12 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600 mb-1">
            FEATURED CATEGORIES
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Browse by Category
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div
            onClick={() => handleCategoryClick("iphone")}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Apple Flagship</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">iPhone Series</h3>
              <p className="text-xs text-slate-500 mt-1">Top-tier smartphone experience</p>
            </div>
            <div className="w-full sm:w-1/2 aspect-4/3 flex items-center justify-center p-2">
              <img
                src="./images/product_1.png"
                alt="iPhone Collection"
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div
            onClick={() => handleCategoryClick("macbook")}
            className="group relative rounded-2xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 cursor-pointer overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4"
          >
            <div className="z-10">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full">Hi-Performance</span>
              <h3 className="text-2xl font-bold text-slate-900 mt-3 group-hover:text-blue-600 transition-colors">Mac & Laptop</h3>
              <p className="text-xs text-slate-500 mt-1">Ultimate computing performance</p>
            </div>
            <div className="w-full sm:w-1/2 aspect-4/3 flex items-center justify-center p-2">
              <img
                src="./images/product_2.png"
                alt="Macbook Collection"
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div
            onClick={() => handleCategoryClick("ipad")}
            className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 cursor-pointer text-center"
          >
            <div className="aspect-square w-full flex items-center justify-center p-3">
              <img
                src="./images/product_3.png"
                alt="iPad Collection"
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mt-2 group-hover:text-blue-600">iPad Series</h4>
            <p className="text-xs text-slate-500 mt-0.5">Unlimited mobile creativity</p>
          </div>

          <div
            onClick={() => handleCategoryClick("watch")}
            className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 cursor-pointer text-center"
          >
            <div className="aspect-square w-full flex items-center justify-center p-3">
              <img
                src="./images/product_4.png"
                alt="Watch Collection"
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mt-2 group-hover:text-blue-600">Apple Watch</h4>
            <p className="text-xs text-slate-500 mt-0.5">Smart health & fitness tracking</p>
          </div>

          <div
            onClick={() => handleCategoryClick("airpod")}
            className="group relative rounded-2xl border border-slate-200 bg-white p-5 shadow-xs hover:shadow-lg hover:border-blue-400 transition-all duration-300 cursor-pointer text-center"
          >
            <div className="aspect-square w-full flex items-center justify-center p-3">
              <img
                src="./images/product_5.png"
                alt="AirPods Collection"
                className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <h4 className="text-lg font-bold text-slate-900 mt-2 group-hover:text-blue-600">AirPods & Audio</h4>
            <p className="text-xs text-slate-500 mt-0.5">Immersive spatial sound</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collection;
