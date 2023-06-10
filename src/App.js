import "./App.css";
import CartContextProvider from "./Components/CartContext";
import Checkout from "./Components/Checkout/Checkout";
import Displaypage from "./Components/Displaypage/Displaypage";
import MainPage from "./Components/HomePage/MainPage";
import Login from "./Components/Login/Login";
import Navbar from "./Components/Navbar/Navbar";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
        <CartContextProvider >
    <div className="App">
        <Navbar />
      <Routes>
        <Route path="" element={<MainPage />} />

        {/* <Route path="" element={<Login />} />
        <Route path="/signup" element={<MainPage />} /> */}



        
        <Route path="/display/:type" element={<Displaypage />} />

        <Route path="/order/:productId" element={<PlaceOrder />} />

        <Route path="/checkout" element={<Checkout />} />


      </Routes>
    </div>
        </CartContextProvider >

  );
}

export default App;
