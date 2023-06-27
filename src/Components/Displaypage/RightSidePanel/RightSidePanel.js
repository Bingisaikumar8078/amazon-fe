import React, { useEffect, useState } from "react";
import axios from "axios";
import "./RightSidePanel.css";
import "../LeftSidePanel/LeftSidePanel.css";
import Product from "./Product";
import { Link } from "react-router-dom";

function RightSidePanel(props) {
  const { type } = props;
  // eslint-disable-next-line no-unused-vars
  const [productType, setproductType] = useState("");
  const [listOfProduct, setListOfProducts] = useState([]);

  let list;
  async function getProduct() {
    try {
      if (type) {
        list = await axios.get(
          `http://localhost:9090/amazon/products/product/${type}`
        );
        setListOfProducts(list.data);
        console.log(list.data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  async function getProductWithType(e) {
    try {
      const type = e.target.value;
      list = await axios.get(
        `http://localhost:9090/amazon/products/phone/${type}`
      );
      setListOfProducts(list.data);
      console.log(listOfProduct);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    setproductType(type);
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
         {/* <FormControlLabel
            control={
              <Checkbox  onChange={(e) => getProductWithType(e)} name="Samsung" />
            }
            label="Samsung"
          /> */}
          <label className="brandname">
            <input
              type="checkbox"
              value="oneplus"
              onClick={(e) => getProductWithType(e)}
            />
            oneplus
          </label>
          <label className="brandname">
            <input type="checkbox" onClick={() => getProduct()} />
            ALL
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
