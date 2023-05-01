import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./RightSidePanel.css";
import Product from './Product';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function RightSidePanel(props) {
    
    const [listOfProduct,setListOfProducts] = useState([]);

    async function getProduct() {
        try {
          const list = await axios.get('http://localhost:8082/amazon/products/product/phone');
          console.log(list.data)
          setListOfProducts(list.data);
        } catch (error) {
          console.error(error);
        }
      }
    useEffect(()=>{
        getProduct();
    },[]);

    return (
        <div className="RightSide__main">
                      {   
                listOfProduct.map ( (item) =>(
                    <Link to={`/order/`+item.productId } style={{ textDecoration: 'none' }} key={item.id}>
                        <Product  definition={item} />
                    </Link>
                ))
            }

        </div>
    );
}

export default RightSidePanel;