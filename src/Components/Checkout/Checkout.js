import { Grid } from "@material-ui/core";
import React, { useContext } from "react";
import "./Checkout.css";
import Checkoutitems from "./Checkoutitems";
import { CartContext } from "../CartContext";

function Checkout(props) {
  const { item, size } = useContext(CartContext);
  const cartValue = function () {
    let price = 0;
    for (let i = 0; i < item.length; i++) {
      price += parseInt(item[i].price);
    }
    return price;
  };
  return (
    <div className="checkout__body">
      <Grid container>
        <Grid item xs={9}>
          <div className="checkout__container">
            <div
              style={{
                fontSize: "30px",
                fontWeight: "500",
                padding: "20px 0px 0px 20px",
              }}
            >
              Shopping Cart
            </div>
            <div>
              {item.length > 0 ? (
                item.map((value) => <Checkoutitems definition={value} />)
              ) : (
                <div style={{ height: "100vh", margin: "30px" }}>
                  {" "}
                  Please buy something
                </div>
              )}
            </div>
          </div>
        </Grid>
        <Grid item xs={1}>
          <div
            style={{
              width: "242px",
              height: "200px",
              padding: "20px",
              marginTop: "25px",
              backgroundColor: "white",
            }}
          >
            <div style={{ fontSize: "26px" }}>
              Subtotal ( {size} items): <strong>{cartValue()}</strong>
            </div>
            <div style={{ paddingTop: "25px " }}>
              <button className="placeorder__button">Proceed to Buy</button>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default Checkout;
