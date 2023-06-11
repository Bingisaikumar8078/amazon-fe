import "./App.css";
import CartContextProvider from "./Components/CartContext";
import Checkout from "./Components/Checkout/Checkout";
import Displaypage from "./Components/Displaypage/Displaypage";
import MainPage from "./Components/HomePage/MainPage";
import Login from "./Components/Login/Login";
import Register from './Components/Register/Register'
import Navbar from "./Components/Navbar/Navbar";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";

function App() {
  return (
        <CartContextProvider >
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="/main" element={<MainPage />} />

        <Route path="" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/profile" element={<Profile />} />




        
        <Route path="/display/:type" element={<Displaypage />} />

        <Route path="/order/:productId" element={<PlaceOrder />} />

        <Route path="/checkout" element={<Checkout />} />


      </Routes>
    </div>
        </CartContextProvider >

  );
}

export default App;
