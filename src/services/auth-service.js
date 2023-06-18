import axios from "axios";
import { Navigate } from "react-router-dom";

const API_URL = "http://localhost:8080/api/auth/";


const register = (username, email, password) => {
  return axios.post(API_URL + "signup", {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(API_URL + "signin", {
      username,
      password,
    })
    .then((response) => {
      if (response.data) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const addToCart = (productInfo) => {
   return  axios.post(`http://localhost:8082/amazon/cart/addToCart`,productInfo)
   .then(res=>alert("Your product has been added to cart"))
   .catch(err=>alert(err))
   
  }
  
const logout = () => {
  console.log("first")
  localStorage.removeItem("user");
  window.location.reload();
  return <Navigate to=''/>
    }
    
    function getCurrentUser() {
      return JSON.parse(localStorage.getItem("user"));
    }
    
    const AuthService = {
      register,
      login,
      logout,
      addToCart,
      getCurrentUser,
};

export default AuthService;
