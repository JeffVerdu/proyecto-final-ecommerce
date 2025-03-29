import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Cart from "../pages/Cart";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const AppRouter = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default AppRouter;
