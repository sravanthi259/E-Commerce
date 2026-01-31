import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const userId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const res = await axios.get("https://e-commerce-duus.onrender.com/api/cart", {
          params: { userId }
        });

        if (res.status === 200) {
          setCartItems(res.data.items);
          setLoading(false);
        }
      } catch (err) {
        console.log("Error fetching cart", err);
        setLoading(false);
      }
    };

    if (userId) fetchCart();
  }, [userId]);

  // 🔹 Order Summary Calculations
  const totalQuantity = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const shipping = subtotal > 0 ? 50 : 0; // example shipping
  const grandTotal = subtotal + shipping;

  return (
    <div className="container mt-4">
      <h2>My Cart</h2>

      {loading ? (
        <p>Loading...</p>
      ) : cartItems.length === 0 ? (
        <p>Your cart is empty 🛒</p>
      ) : (
        <div className="row mt-4">
          {/* Cart Items */}
          <div className="col-md-8">
            <div className="row row-cols-1 row-cols-md-2 g-4">
              {cartItems.map((item) => (
                <div className="col" key={item._id}>
                  <div className="card p-3 shadow-sm">
                    <h5>{item.product.name}</h5>
                    <p>
                      <b>Price:</b> ₹{item.product.price}
                    </p>
                    <p>
                      <b>Quantity:</b> {item.quantity}
                    </p>
                    <p>
                      <b>Total:</b> ₹{item.product.price * item.quantity}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Order Summary */}
          <div className="col-md-4">
            <div className="card p-4 shadow-sm">
              <h4 className="mb-3">Order Summary</h4>

              <p>
                Total Items: <b>{totalQuantity}</b>
              </p>
              <p>
                Subtotal: <b>₹{subtotal}</b>
              </p>
              <p>
                Shipping: <b>₹{shipping}</b>
              </p>

              <hr />

              <h5>Grand Total: ₹{grandTotal}</h5>

              <button className="btn btn-dark w-100 mt-3">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
