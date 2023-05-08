import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdFour.css";

function AdFour(props) {
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
    <>
      
      <div className="AdvertisementOne__main">
        <div className="AdvertisementOne__header">
          Up to 60% off | Styles for men
        </div>
        <div className="AdvertisementOne__body">
          {
            <>
              <img
                src={listOfProduct[0]?.imageURL}
                className="ad_fourImage"
                alt=""
              />
              <img
                src={listOfProduct[1]?.imageURL}
                className="ad_fourImage"
                alt=""
              />
              <img
                src={listOfProduct[2]?.imageURL}
                className="ad_fourImage"
                alt=""
              />
              <img
                src={listOfProduct[3]?.imageURL}
                className="ad_fourImage"
                alt=""
              />
            </>
          }
          {/* <img src='https://ik.imagekit.io/q7q7dn72y/amazon-image/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1681129188611' className='ad_fourImage' alt=""/>
            <img src='https://ik.imagekit.io/q7q7dn72y/amazon-image/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1681129188611' className='ad_fourImage' alt=""/>
            <img src='https://ik.imagekit.io/q7q7dn72y/amazon-image/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1681129188611' className='ad_fourImage' alt=""/>
          <img src='https://ik.imagekit.io/q7q7dn72y/amazon-image/amazon-image/V238940049_IN_PC_BAU_Edit_Creation_Laptops2X._SY608_CB667377204_.jpg?updatedAt=1681129188611' className='ad_fourImage' alt=""/> */}
        </div>
        <div className="AdvertisementOne__footer">See More</div>
      </div>
      
    </>
  );
}

export default AdFour;
