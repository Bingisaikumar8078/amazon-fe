import React, { useContext } from 'react'
import "./Navbar.css";
// import { CartContext } from "../CartContext";
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { CartContext } from '../CartContext';
import { Button } from '@material-ui/core';
import AuthService from '../../services/auth-service';
function Navbar() {
  let user;
  const { isLoggedIn } = useSelector((state) => state.auth);

  const { item,  size  } = useContext(CartContext);
  const logout = ()=>{
    AuthService.logout();
  }

if(isLoggedIn){
 user = JSON.parse(localStorage.getItem("user"))
}

  return (
      <div>
        <div className="navbar__component">
          <Link to="">
            <div className="navbar__logo"></div>
          </Link>
          <div className="navbar__locator">
            <div className="navbar__locatorImage"></div>
            <div className="navbar__location"> Hyderabad</div>
          </div>
          <div className="navbar__searchcomponent">
            <div>
              <select className="navbar__dropbox">
                <option value="All">All</option>
                <option value="Alexa">Alexa</option>
                <option value="Books">Books</option>
                <option value="Baby">Baby</option>
                <option value="Beauty">Beauty</option>
                <option value="Clothes">Clothes</option>
              </select>
            </div>
            <div>
              <input type="text" className="navbar__searchbox" />
            </div>
            <div className="navbar__seaarchboxdiv">
              <div className="navbar__searchicon" />
            </div>
          </div>
          <div className="navbar_text navbar__signin">
            <div style={{ fontSize: "14px" }}>Hello </div>
            {
              isLoggedIn ? (<div style={{ fontSize: "14px" , fontWeight: "bold"  }}>{user.username}</div>):
              (<div style={{ fontSize: "14px" }}>Sign In</div>)
            }

            
            <Link to='/profile'
            style={{ textDecoration: "none", color: "#FFF" }} 
            >
            <div>Account</div>
            </Link>
          </div>
          <div className="navbar_text navbar__returnsandorders ">
            <div style={{ fontSize: "14px" }}>Returns</div>
            <div style={{ fontWeight: "bold" }}> & Order</div>
          </div>
          <Link to="/checkout">
            <div className="navbar_text navbar__cart">
              <div src="" className="cart__image"></div>
              <div className="cart__item">{item.length} </div>
              <div className="navbar_text_cart">Cart</div>
            </div>
          </Link>
           <div
           style={{margin: '12px'}}
           >
           <Button
            variant="contained" color="primary" size='small'
            onClick={logout}
            >
              Logout
            </Button>
           </div>
        </div>
        <div className="navbar__footer">
          <div className="navbar__footer_text">Best Seller</div>
          <Link
            to="/display/phone"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <div className="navbar__footer_text">Mobile</div>
          </Link>
          <div className="navbar__footer_text">Amazon Pay</div>
          <div className="navbar__footer_text">Fashion</div>
          <Link
            to="/display/electronics"
            style={{ textDecoration: "none", color: "#FFF" }}
          >
            <div className="navbar__footer_text">Electronics</div>
          </Link>
          <div className="navbar__footer_text">Prime</div>
          <div className="navbar__footer_text">New Release</div>
          <div className="navbar__footer_text">Customer Service</div>
          <div className="navbar__footer_text">Computers</div>
          <div className="navbar__footer_text">Home & Kitchen</div>
        </div>
      </div>
    );
}

export default Navbar