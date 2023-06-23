import { Grid, Paper } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import "./PlaceOrder.css";
import { useSelector } from "react-redux";
import { CartContext } from "../CartContext";

function PlaceOrder() {
  let user;
  const [productDetails, setProductDetails] = useState([]);
  const { increment } = useContext(CartContext);
  let { productId } = useParams();
  const { isLoggedIn } = useSelector((state) => state.auth);

  if (isLoggedIn) {
    user = JSON.parse(localStorage.getItem("user"));
  }

  const addTOCart = () => {
    increment(productDetails);
    // const productInfo ={
    //   brand:productDetails.brand,
    //   name:productDetails.name,
    //   price:productDetails.price,
    //   productId:productDetails.productId,
    //   rating:productDetails.rating,
    //   userId:user.id,
    //   imageURl:productDetails.imageURL,
    //   type:productDetails.type
    // }
    // axios.post(`http://localhost:8082/amazon/cart/addToCart`,productInfo)
    // .then(res=>alert("Your product has been added to cart"))
    // .catch(err=>alert(err))
  };
  const about = [
    "6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display",
    "Water and dust resistant (2 meters for up to 30 minutes, IP68)",
    "Dual-camera system with 12MP Ultra Wide and Wide cameras; Night mode, Portrait mode, and 4K video up to 60fps",
    "Face ID for secure authentication",
  ];
  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function getProduct() {
    try {
      const product = await axios.get(
        `http://localhost:8082/amazon/products/search/${productId}`
      );
      setProductDetails(product.data);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const rating=Number(productDetails.rating)

  return (
    <div>
      <Grid container>
        <Grid item xs={4}>
          <img
            className="placeorder__image"
            src={productDetails.imageURL}
            alt=""
          />
        </Grid>
        <Grid item xs={4}>
          <div className="placeholder__description">
            <div
              style={{
                fontSize: "24px",
                lineHeight: "32px",
                fontWeight: "500px",
              }}
            >
              {productDetails.name}
            </div>
            <div>
              <Rating
                name="read-only"
                value={rating}
                style={{ fontSize: "20px" }}
                readOnly
              />
          | 1000 + answered questions
            </div>
            <hr></hr>
            <div>
              <div className="textgap">
                <span className="pricetag">₹{productDetails.price}</span>
              </div>
              <div className="textgap">
                <span>
                  FREE delivery
                  <strong>{productDetails.delivery}</strong>
                </span>
              </div>
              <div className="textgap">
                <span>EMI starts at ₹{productDetails.emi}No Cost EMI</span>
              </div>
              <div className="textgap">
                Sold by <strong>{productDetails.soldby}</strong> and Fulfilled
                by Amazon.
              </div>
            </div>
            <div>
              <br></br>
              <div style={{ fontSize: "24px" }} className="textgap">
                About this item
              </div>
              <div>
                <ul>
                  {about !== undefined ? (
                    about.map((item , index) => (
                      <li key={index}>
                        {item} 
                      </li>
                    ))
                  ) : (
                    <span></span>
                  )}
                </ul>
                {/* <ul>
                  <li>
                    6.1-inch (15.5 cm diagonal) Liquid Retina HD LCD display
                  </li>
                  <li>
                    Water and dust resistant (2 meters for up to 30 minutes,
                    IP68)
                  </li>
                  <li>
                    Dual-camera system with 12MP Ultra Wide and Wide cameras;
                    Night mode, Portrait mode, and 4K video up to 60fps
                  </li>
                  <li>
                    12MP TrueDepth front camera with Portrait mode, 4K video,
                    and Slo-Mo
                  </li>
                  <li>Face ID for secure authentication</li>
                  <li>A13 Bionic chip with third-generation Neural Engine</li>
                  <li>Fast-charge capable</li>
                </ul> */}
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={1}>
          Order
          <Paper variant="outlined" className="placeorder__order">
            <button
              className="placeorder__button addtocart"
              onClick={addTOCart}
            >
              Add to Cart
            </button>

            <Link to="/checkout">
              <button className="placeorder__button buynow">Buy Now</button>
            </Link>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default PlaceOrder;
