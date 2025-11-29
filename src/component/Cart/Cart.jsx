import React, { useState } from "react";
import { useCartContext } from "../../Context/Cart_context";
import { Cartitem } from "./CartItem/Cartitem";
import "./Cart.css";
import { NavLink } from "react-router-dom";
import { Formatprice } from "../../Helpers/Formatprice";
import { ShoppingBag, ShoppingCart } from "lucide-react";
import { auth } from "../../firebase";

export const Cart = () => {
  const { cart, deleteallcartdata, total_price, shipping_fee } =
    useCartContext();

  // loggin system
  const [user, setUser] = useState(auth.currentUser);

  return (
    <div className="cart-page-wrapper">
      <div className="cart-container">
        {/* Cart Header */}
        <div className="cart-header">
          <div className="cart-header-badge">
            <ShoppingCart size={16} />
            YOUR CART
          </div>
          <h1 className="cart-header-title">Shopping Cart</h1>
          <p className="cart-header-subtitle">
            {cart.length} {cart.length === 1 ? "item" : "items"} in your cart
          </p>
        </div>

        {cart.length === 0 ? (
          /* Empty Cart State */
          <div className="emptycart">
            <div className="emptycart-icon">
              <ShoppingBag size={60} />
            </div>
            <h2 className="emptycart-title">Your Cart is Empty</h2>
            <p className="emptycart-text">
              Looks like you haven't added anything to your cart yet. Start
              shopping now!
            </p>
            <NavLink to="/products" className="emptycart-btn">
              Start Shopping
            </NavLink>
          </div>
        ) : (
          <div className="container-fluid d-flex justify-content-center">
            <div className="container container-fluid g-0 d-flex justify-content-center">
              <div className="col-12 col-lg-9">
                {/* User Profile Section (if user exists) */}
                {/* Uncomment and modify this section if you have user data */}
                {cart && user ? (
                  <div className="cartuserprofile">
                    <img src={user?.photoURL} alt="User" />
                    <h6>{user?.displayName}</h6>
                  </div>
                ) : null}


                {/* Cart Table Header */}
                <div className="cart-table-header">
                  <div className="row text-center">
                    <div className="col-5 col-sm-3">
                      <p>Item</p>
                    </div>
                    <div className="col-2 d-none d-sm-block">
                      <p>Price</p>
                    </div>
                    <div className="col-3 col-sm-2">
                      <p>Quantity</p>
                    </div>
                    <div className="col-2 d-none d-sm-block">
                      <p>Subtotal</p>
                    </div>
                    <div className="col-3 col-sm-2">
                      <p>Remove</p>
                    </div>
                  </div>
                  <hr />
                </div>

                {/* Cart Items */}
                <div className="cart-items-container">
                  {cart.map((currelm) => {
                    return <Cartitem key={currelm.id} {...currelm} />;
                  })}
                </div>

                {/* Cart Footer - Action Buttons */}
                <div className="row justify-content-between cartfooter">
                  <div className="col-12 col-sm-6 col-lg-4 mb-3 mb-sm-0">
                    <NavLink to="/products" className="continuebtn">
                      Continue Shopping
                    </NavLink>
                  </div>
                  <div className="col-12 col-sm-6 col-lg-4 text-end">
                    <button
                      className="clearbtn"
                      onClick={() => deleteallcartdata()}
                    >
                      Clear Cart
                    </button>
                  </div>
                </div>

                {/* Order Total Section */}
                <div className="row justify-content-center justify-content-sm-end">
                  <div className="order-total-amount col-12 col-sm-10 col-md-6 col-lg-5">
                    <div className="row">
                      <div className="col-7">Subtotal:</div>
                      <div className="col-5">
                        <h5>
                          <Formatprice price={total_price} />
                        </h5>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-7">Shipping Fee:</div>
                      <div className="col-5">
                        <h5>
                          <Formatprice price={shipping_fee} />
                        </h5>
                      </div>
                    </div>
                    <hr />
                    <div className="row">
                      <div className="col-7">Total Price:</div>
                      <div className="order_total col-5">
                        <h5>
                          <Formatprice price={shipping_fee + total_price} />
                        </h5>
                      </div>
                    </div>
                    <button className="checkout-btn">
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
