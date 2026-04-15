import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { json, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { addCart } from "../store/cartSlice";
import "./DetailPage.css";

const DetailPage = () => {
  const [typeQuantity, setTypeQuantity] = useState(1); //state lưu số lượng sản phẩm
  const [dataForId, setDataForId] = useState(null); //Lưu dữ liệu của sản phẩm mà trang đang hiển thị
  const [dataRelated, setDataRelated] = useState(null); //Sản phẩm khác có cùng category

  const dispatch = useDispatch();

  //Dữ liệu lấy từ loader
  const dataNewDetail = useLoaderData();
  console.log(dataNewDetail);

  //params khới vi71 id của sản phẩm đang hiển thị
  const params = useParams();

  useEffect(() => {
    //Hàm tiến hành lấy thông tin sản phẩm
    const showDetailProduct = () => {
      //Lấy sản phẩm trong shop khớp với id là params
      const dataOneDetail = dataNewDetail.find(
        (de) => de.id.$oid === params.productId,
      );

      console.log(dataOneDetail);
      setDataForId(dataOneDetail);

      //Lấy các sản phẩm cùng chung category
      const dataManyProduct = dataNewDetail.filter(
        (product) => product.category === dataOneDetail.category,
      );
      console.log(dataManyProduct);

      //Lấy các sản phẩm còn lại trừ sản phẩm hiện được trang render
      if (dataManyProduct.length > 1) {
        //Từ 2 sản phẩm mới lọc
        var leftData = dataManyProduct.filter(
          (product) => product.id.$oid !== params.productId,
        );
      } else {
        //Nếu không thì null chứ không lọc
        leftData = null;
      }

      console.log(leftData);
      //Lưu kết quả vào state dataRelated
      setDataRelated(leftData);
    };
    showDetailProduct();
  }, [params.productId]);

  console.log(dataForId);
  console.log(dataRelated);

  //Lấy value của input và lưu vào state
  const typeQuantityHandler = (event) => {
    event.preventDefault();
    setTypeQuantity(Number(event.target.value));
    console.log(event.target.value);
  };

  //Giảm số lượng nhưng không được < 1 và cập nhật lại vào state typeQuantity
  const downQuantity = (event) => {
    event.preventDefault();
    if (typeQuantity === 1) {
      setTypeQuantity(1);
    } else {
      setTypeQuantity(typeQuantity - 1);
    }
  };

  //Tăng số lượng và cập nhật lại vào state typeQuantity
  const riseQuantity = (event) => {
    event.preventDefault();
    if (typeQuantity >= 1) {
      setTypeQuantity(typeQuantity + 1);
    }
  };

  //Thực hiện chức năng tehm6 sản phẩm vào giỏ hàng
  const addToCartHandler = (event) => {
    event.preventDefault();
    //Action nhận data là sản phẩm trang đang render và số lượng là state typeQuantity
    dispatch(addCart({ data: dataForId, quantity: typeQuantity }));
    alert("✓ Sản phẩm đã được thêm vào giỏ hàng!");
  };

  const navigate = useNavigate();
  console.log(params);

  return (
    <div>
      <div className="wrap-shop">
        <div className="topic-shop">
          <h1>SHOP</h1>
          <p>SHOP</p>
        </div>
      </div>
      <div className="wrap-top">
        <Row className="detail-top">
          <Col className="bg small-img" xs="1">
            <img
              src={dataForId && dataForId.img1}
              alt={`${dataForId && dataForId.img1}`}
            />
            <img
              src={dataForId && dataForId.img2}
              alt={`${dataForId && dataForId.img2}`}
            />
            <img
              src={dataForId && dataForId.img3}
              alt={`${dataForId && dataForId.img3}`}
            />
            <img
              src={dataForId && dataForId.img4}
              alt={`${dataForId && dataForId.img4}`}
            />
          </Col>
          <Col className="bg big-img" xs="5">
            <img
              src={dataForId && dataForId.img4}
              alt={`${dataForId && dataForId.img4}`}
            />
          </Col>
          <Col className="bg detail-id" xs="6">
            <h2>{dataForId && dataForId.name}</h2>
            <p className="price-page-detail">
              {dataForId && dataForId.price.toLocaleString()} VND
            </p>
            <p className="short-page-detail">
              {dataForId && dataForId.shortDesc}
            </p>
            <div className="detail-category">
              <p className="category-bold">CATEGORY: </p>{" "}
              <p>{dataForId && dataForId.category}</p>
            </div>
            <form className="quantity">
              <label>QUANTITY</label>
              <button className="btn-left" onClick={downQuantity}>
                ◂
              </button>
              <input
                value={typeQuantity}
                onChange={typeQuantityHandler}
              ></input>
              <button className="btn-right" onClick={riseQuantity}>
                ▸
              </button>
              <button className="add-cart" onClick={addToCartHandler}>
                Add to cart
              </button>
            </form>
          </Col>
        </Row>
      </div>
      <div className="wrap-des">
        <div className="detail-des">
          <button className="des-btn">DESCRIPTION</button>
          <h4>PRODUCT DESCRIPTION</h4>
          <p>
            {dataForId &&
              dataForId.longDesc
                .replaceAll("•", "-")
                .replace("Tính năng nổi bật", "TÍNH NĂNG NỔI BẬC")}
          </p>
        </div>
      </div>
      <div className="wrap-relate">
        <h4>RELATED PRODUCTS</h4>
      </div>
      <div className="wrap-relate">
        <div className="display-relate">
          {dataRelated
            ? dataRelated.map((relate, index) => (
                <div
                  key={index}
                  onClick={() => {
                    navigate(`/detail/${relate.id.$oid}`);
                  }}
                >
                  <img
                    className="related-img"
                    src={relate && relate.img1}
                    alt="dataRelated"
                  />
                  <h5 className="name-relate">{relate && relate.name}</h5>
                  <p className="price-relate">
                    {relate && relate.price.toLocaleString()}
                    VND
                  </p>
                </div>
              ))
            : "Not related product"}
        </div>
      </div>
    </div>
  );
};
export default DetailPage;

export async function loader() {
  const response = await fetch(
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74",
  );

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
