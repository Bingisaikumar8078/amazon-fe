import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RightSidePanel.css";
import "../LeftSidePanel/LeftSidePanel.css";
import Product from "./Product";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

function RightSidePanel(props) {
  const [listOfProduct, setListOfProducts] = useState([]);

  let list;
  async function getProduct() {
    try {
      list = await axios.get(
        "http://localhost:8082/amazon/products/product/phone"
      );
      setListOfProducts(list.data);
    } catch (error) {
      console.error(error);
    }
  }

  async function getProductWithType(e) {
    try {
      const type = e.target.value;
      console.log(type);
     list = await axios.get(
        `http://localhost:8082/amazon/products/phone/${type}`
      );
      console.log(list.data);
      setListOfProducts(list.data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);

  return (
    <>
      <div className="LeftSize__main">
        <div className="leftSide__header">Brand</div>
        <div className="leftSide__brandname">
          <label className="brandname">
            <input
              type="checkbox"
              value="iPhone"
              onClick={(e) => getProductWithType(e)}
            />
            iPhone
          </label>
          <label className="brandname">
            <input
              type="checkbox"
              value="Samsung"
              onClick={(e) => getProductWithType(e)}
              
              />
            Samsung
          </label>
          <label className="brandname">
            <input type="checkbox" value="oneplus" 
              onClick={(e) => getProductWithType(e)}
            />
            oneplus
          </label>
        </div>
        <div className="RightSide__main">
          {listOfProduct.map((item) => (
            <Link
              to={`/order/` + item.productId}
              style={{ textDecoration: "none" }}
              key={item.id}
            >
              <Product definition={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default RightSidePanel;
