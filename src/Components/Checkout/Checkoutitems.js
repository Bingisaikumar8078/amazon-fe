import React from "react";
import "./Checkout.css";

function CheckoutItems(props) {
  return (
    <div>
      <div
        style={{
          border: "1px solid #E7E7E7",
          width: "95%",
          display: "flex",
          height: "250px",
          margin: "25px",
        }}
      >
        <div style={{ margin: "25px" }}>
          <img height="200px" src={props.definition.image} alt="" />
        </div>
        <div style={{ marginTop: "20px" }}>
          <div style={{ fontSize: "20px" }} className="textgap">
            {props.definition.name}
          </div>
          <div style={{ fontWeight: "bold" }} className="textgap">
            {props.definition.price}
          </div>
          <div className="textgap">{props.definition.status}</div>
          <div className="textgap">
            FREE delivery Tuesday, 25 April. Order within 19 hrs 7 mins.
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutItems;