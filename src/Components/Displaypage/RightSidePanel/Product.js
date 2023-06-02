import React, { useEffect } from 'react';
import "./RightSidePanel.css";
import Rating from '@material-ui/lab/Rating';    
import getSymbolFromCurrency from 'currency-symbol-map'; 
import { useState } from 'react';

function Product(props) {
    const [price, setprice] = useState(props.definition.price)
    useEffect(() => {
        const eventsource = new EventSource("http://localhost:8082/amazon/products/prices");
        let priceData;
        eventsource.addEventListener("price-event",(e)=>{
            priceData= e.data;
            setprice(priceData)
        })
    }, [])
    
    return (
        <div className="product">
            <div className="product__image">
                <img src={props.definition.imageURL} height="280px" alt='' />
            </div>
            <div className="product__name">
                 {props.definition.name}
            </div>
            <div className="product__rating">
                 <Rating name="read-only" value="4" style={{ fontSize : "20px"}} readOnly />
                {props.definition.rating}
            </div>
            <div className="product__price">
            { getSymbolFromCurrency('INR')}
{price}
            </div>
        </div>
    );
}

export default Product;