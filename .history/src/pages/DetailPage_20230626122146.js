import { Col, Row } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import { json, useLoaderData, useParams } from "react-router-dom";
import "./DetailPage.css";
import Related from "../component/shop/Related";

const DetailPage = () => {
  const [typeQuantity, setTypeQuantity] = useState();
  const [dataForId, setDataForId] = useState(null);
  const [dataRelated, setDataRelated] = useState(null);

  const dataNewDetail = useLoaderData();
  console.log(dataNewDetail);

  const params = useParams();

  //find
  const showDetailProduct = () => {
    console.log(dataNewDetail);
    const dataOneDetail = dataNewDetail.find(
      (de) => de.id.$oid === params.productId
    );

    console.log(dataOneDetail);
    setDataForId(dataOneDetail);

    const dataManyProduct = dataNewDetail.filter(
      (product) => product.category === dataOneDetail.category
    );

    console.log(dataManyProduct);

    if (dataManyProduct.length > 1) {
      var leftData = dataManyProduct.filter(
        (product) => product.id.$oid !== params.productId
      );
    } else {
      leftData = null;
    }

    console.log(leftData);
    setDataRelated(leftData);
  };

  useEffect(() => {
    showDetailProduct();
  }, []);

  // console.log(dataForId);
  console.log(dataRelated);
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
              <button className="btn-left">◂</button>
              <input value="1"></input>
              <button className="btn-right">▸</button>
              <button className="add-cart">Add to cart</button>
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
                <Related key={index} dataRelated={relate} />
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
    "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
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

// //1 sp hien co
// const dataDetail = useSelector((state) => state.detail);
// console.log(dataDetail);

// const relatedd = useSelector((state) => state.related);
// console.log(relatedd);

// //id cuaủa sp hien co
// // const params = useParams();
// // console.log(params.productId);

// const dispatch = useDispatch();

// const location = useLocation();
// const list = location.state.listItem;

// const showRelated = () => {
//   const related = list.filter(function (li) {
//     return li.id.$oid !== dataDetail.id.$oid;
//   });

//   dispatch({
//     type: "RELATED",
//     payload: { data: related, category: dataDetail.category },
//   });
// };

// useEffect(() => {
//   showRelated();
// }, []);

//8 sp

// const category = location.state.category;
// console.log(typeof category);
// //list theo category
// const listRelated = useSelector((state) => state.dataRelated);
// console.log(listRelated);

// useEffect(() => {
//   const detailPageValue = localStorage.getItem("detailPage");
//   console.log(detailPageValue);
//   if (detailPageValue) {
//     dispatch({
//       type: "DETAIL",
//       payload: { data: detailPageValue.data, id: detailPageValue.id },
//     });
//   }
// }, []);

// useEffect(() => {
//   const filteredData = localStorage.getItem("filterForDetail");
//   console.log(filteredData);
//   if (filteredData) {
//     dispatch({
//       type: "FILTER",
//       payload: { data: filteredData.data, category: filteredData.category },
//     });
//   }
// }, []);

//const dispatch = useDispatch();

// // detail noi dung hien thi trong DetailPage
// const dataDetail = useSelector((state) => state.cart.detail);
// console.log(dataDetail);

// //Cac san pham cung chung Category
// const list = useSelector((state) => state.cart.listItem);
// console.log(list);

// // Cac sp con lai trong related sau khi filter
// const related = useSelector((state) => state.cart.related);
// console.log(related);

// const showRelatedData = () => {
//   dispatch({
//     type: "RELATED",
//     payload: { data: list, id: dataDetail.id.$oid },
//   });
// };

// useEffect(() => {
//   showRelatedData();
// }, []);

// <div className="wrap-relate">
//   <div className="detail-relate">
//     <h4>RELATED PRODUCTS</h4>
//     <div>
//       <img
//         className="related-img"
//         src={dataRelated && dataRelated[0].img1}
//         alt="dataRelated"
//       />
//       <h5>{dataRelated && dataRelated[0].name}</h5>
//       <p>{dataRelated && dataRelated[0].price.toLocaleString()} VND</p>
//     </div>
//   </div>
// </div>
