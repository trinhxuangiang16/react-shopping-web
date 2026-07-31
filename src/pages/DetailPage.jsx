import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addCart } from "../store/cartSlice";
import { Button } from "../component/ui/button";
import { ProductCard } from "../component/ui/ProductCard";
import { formatPrice } from "../lib/formatPrice";
import { ShoppingBag, Minus, Plus, Check } from "lucide-react";

import { toast } from "react-hot-toast";

const DetailPage = () => {
  const [typeQuantity, setTypeQuantity] = useState(1);
  const [dataForId, setDataForId] = useState(null);
  const [dataRelated, setDataRelated] = useState(null);
  const [selectedImg, setSelectedImg] = useState("");

  const dispatch = useDispatch();
  const dataNewDetail = useLoaderData();
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const showDetailProduct = () => {
      const dataOneDetail = dataNewDetail.find(
        (de) => de.id.$oid === params.productId || de.id === params.productId,
      );

      if (dataOneDetail) {
        setDataForId(dataOneDetail);
        setSelectedImg(dataOneDetail.img1 || dataOneDetail.img4);

        const dataManyProduct = dataNewDetail.filter(
          (product) => product.category === dataOneDetail.category,
        );

        if (dataManyProduct.length > 1) {
          var leftData = dataManyProduct.filter(
            (product) => (product.id.$oid || product.id) !== (dataOneDetail.id.$oid || dataOneDetail.id),
          );
        } else {
          leftData = null;
        }
        setDataRelated(leftData);
      }
    };
    showDetailProduct();
  }, [params.productId, dataNewDetail]);

  const typeQuantityHandler = (event) => {
    setTypeQuantity(Math.max(1, Number(event.target.value) || 1));
  };

  const downQuantity = (event) => {
    event.preventDefault();
    if (typeQuantity > 1) {
      setTypeQuantity(typeQuantity - 1);
    }
  };

  const riseQuantity = (event) => {
    event.preventDefault();
    setTypeQuantity(typeQuantity + 1);
  };

  const addToCartHandler = (event) => {
    event.preventDefault();
    if (!dataForId) return;
    dispatch(addCart({ data: dataForId, quantity: typeQuantity }));
    toast.success("Product added to cart successfully!");
  };

  if (!dataForId) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-8">
        <p className="text-sm font-semibold text-slate-500">Loading product details...</p>
      </div>
    );
  }

  const images = [dataForId.img1, dataForId.img2, dataForId.img3, dataForId.img4].filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50 py-8">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/")}>
            Home
          </span>
          <span>/</span>
          <span className="cursor-pointer hover:text-blue-600" onClick={() => navigate("/shop")}>
            Shop
          </span>
          <span>/</span>
          <span className="text-slate-900 font-bold">{dataForId.name}</span>
        </nav>
      </div>

      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className="rounded-none bg-white border border-slate-200 p-6 sm:p-8 shadow-xs">
          <Row className="gy-8">
            <Col xs={12} md={6}>
              <div className="aspect-square rounded-none bg-white border border-slate-100 p-6 flex items-center justify-center">
                <img
                  src={selectedImg || dataForId.img1}
                  alt={dataForId.name}
                  className="max-h-full max-w-full object-contain transition-all duration-300"
                />
              </div>

              <div className="flex gap-3 mt-4 justify-center">
                {images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setSelectedImg(img)}
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-none bg-white border p-1.5 cursor-pointer transition-all duration-200 flex items-center justify-center ${selectedImg === img
                      ? "border-blue-600 ring-2 ring-blue-500/20 shadow-xs"
                      : "border-slate-200 hover:border-blue-300"
                      }`}
                  >
                    <img src={img} alt={`thumbnail-${idx}`} className="max-h-full max-w-full object-contain pointer-events-none" />
                  </button>
                ))}
              </div>
            </Col>

            <Col xs={12} md={6}>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 bg-blue-50 px-3 py-1 rounded-none">
                {dataForId.category}
              </span>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 leading-snug">
                {dataForId.name}
              </h1>
              <p className="text-2xl sm:text-3xl font-extrabold tabular-nums text-blue-600 mt-3">
                {formatPrice(dataForId.price)}
              </p>
              <p className="text-sm leading-relaxed text-slate-600 mt-4 pb-6 border-b border-slate-100">
                {dataForId.shortDesc}
              </p>

              <div className="py-4 border-b border-slate-100 flex items-center justify-between text-xs">
                <span className="font-bold uppercase tracking-wider text-slate-400">Status:</span>
                <span className="font-semibold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-none flex items-center gap-1">
                  <Check className="size-3.5" /> In Stock & Official Warranty
                </span>
              </div>

              <form className="mt-6 space-y-4" onSubmit={addToCartHandler}>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500 block">Quantity</label>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex items-center rounded-none border border-slate-300 bg-white p-1 shadow-2xs">
                    <button
                      type="button"
                      onClick={downQuantity}
                      className="size-9 rounded-none flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      <Minus className="size-4" />
                    </button>
                    <input
                      value={typeQuantity}
                      onChange={typeQuantityHandler}
                      className="w-12 text-center text-sm font-bold text-slate-900 bg-transparent focus:outline-none"
                    />
                    <button
                      type="button"
                      onClick={riseQuantity}
                      className="size-9 rounded-none flex items-center justify-center text-slate-600 hover:bg-slate-100 transition-colors"
                    >
                      <Plus className="size-4" />
                    </button>
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="lg"
                    className="flex-1 font-bold text-base shadow-md gap-2 rounded-none"
                  >
                    <ShoppingBag className="size-5" /> Add to Cart
                  </Button>
                </div>
              </form>
            </Col>
          </Row>

          <div className="mt-12 pt-8 border-t border-slate-100">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-1">DETAILED INFORMATION</p>
            <h3 className="text-xl font-bold text-slate-900 mb-4">
              Product Description
            </h3>
            <div className="text-sm leading-relaxed text-slate-700 whitespace-pre-line max-w-4xl bg-slate-50 p-6 rounded-none border border-slate-100">
              {dataForId.longDesc}
            </div>
          </div>
        </div>

        {dataRelated && dataRelated.length > 0 && (
          <div className="mt-12">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600 mb-1">YOU MAY ALSO LIKE</p>
            <h3 className="text-xl font-bold text-slate-900 mb-6">
              Related Products
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {dataRelated.map((relate, index) => (
                <ProductCard
                  key={index}
                  image={relate.img1}
                  name={relate.name}
                  price={relate.price}
                  onClick={() => {
                    navigate(`/detail/${relate.id.$oid || relate.id}`);
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default DetailPage;

export async function loader() {
  const response = await fetch("/data_en.json");

  if (!response.ok) {
    throw json({ message: "Could not fetch product." }, { status: 500 });
  } else {
    const data = await response.json();
    console.log(data);

    const requestDetail = data.map((product) => {
      return {
        id: product._id,
        name: product.name,
        price: parseInt(product.price),
        category: product.category,
        shortDesc: product.short_desc,
        longDesc: product.long_desc,
        img1: product.img1,
        img2: product.img2,
        img3: product.img3,
        img4: product.img4,
      };
    });
    console.log(requestDetail);
    return requestDetail;
  }
}
