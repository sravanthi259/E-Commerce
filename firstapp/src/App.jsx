import Home from "./components/Home";
import Register from "./components/Register";
import Login from "./components/Login";
import Navigation from "./components/Navigation";
import AddProduct from "./components/AddProduct";
import Cart from "./components/Cart";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-product" element={<AddProduct />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}
