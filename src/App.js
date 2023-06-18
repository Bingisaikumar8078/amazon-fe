import "./App.css";
import CartContextProvider from "./Components/CartContext";
import Checkout from "./Components/Checkout/Checkout";
import Displaypage from "./Components/Displaypage/Displaypage";
import MainPage from "./Components/HomePage/MainPage";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import PlaceOrder from "./Components/PlaceOrder/PlaceOrder";
import { Routes, Route } from "react-router-dom";
import Profile from "./Components/Profile/Profile";
import { useSelector } from "react-redux";
import ProtectedRoute from "./Components/Protected-Routes/ProtectedRoute";
import OrderModal from "./Components/OrderNow/OrderNowModal";

function App() {
  const { isLoggedIn } = useSelector((state) => state.auth);

  return (
    <CartContextProvider>
      <div className="App">
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route path="/signup" element={<Register />} />
          <Route path="" element={<Login />} />
            <>
              <Route path="/main" element={<ProtectedRoute><MainPage /> </ProtectedRoute>} />
              <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
              <Route path="/display/:type" element={<ProtectedRoute><Displaypage /></ProtectedRoute>} />
              <Route path="/order/:productId" element={<ProtectedRoute><PlaceOrder /></ProtectedRoute>} />
              <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
              <Route path="/order" element={<ProtectedRoute><OrderModal /></ProtectedRoute>} />
            </>
        </Routes>
      </div>
    </CartContextProvider>
  );
}

export default App;
