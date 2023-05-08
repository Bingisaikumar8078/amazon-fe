import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdOne.css";
import { Link } from "react-router-dom";
function AdOne(props) {
  const [listOfProduct, setListOfProducts] = useState([]);

  async function getProduct() {
    try {
      const list = await axios.get(
        "http://localhost:8082/amazon/products/product/phone"
      );
      setListOfProducts(list.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div className="Adone__main">
      <div className="Adone__header">Up to 60% off | Styles for men</div>
      <div className="Adone__body">
        {/* <img src='https://ik.imagekit.io/q7q7dn72y/amazon-image/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1681129188611' width='300px'/> */}
        {
          <>
            <Link
              to={`/order/` + listOfProduct[0]?.productId}
              style={{ textDecoration: "none" }}
              key={listOfProduct[0]?.id}
            >
              <img src={listOfProduct[0]?.imageURL} width="150px" alt="" />
            </Link>
          </>
        }
      </div>
      <div className="Adone__footer">See More</div>
    </div>
  );
}

export default AdOne;
