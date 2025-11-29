import React from "react";
import { NavLink } from "react-router-dom";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import "./Navbar.css";
import { useCartContext } from "../../Context/Cart_context";
import { useState, useEffect } from "react";

import { auth, provider } from "../../firebase";
import { signInWithPopup, signOut, onAuthStateChanged } from "firebase/auth";

const Navbar = ({menuIcon, setmenuIcon}) => {
  let { total_item } = useCartContext();

  const [user, setUser] = useState(null);

  // 🔥 Listen to login state (runs on refresh too)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);   // if logged in → user; if logged out → null
    });

    return () => unsubscribe();
  }, []);

  const handleLogin = async () => {
    const result = await signInWithPopup(auth, provider);
    setUser(result.user);
  };

  const handleLogout = async () => {
    await signOut(auth);
    setUser(null);
  };

  return (
    <>
      <div
        className={
          menuIcon
            ? "navbar activenav d-flex justify-content-center align-items-center"
            : "navbar d-flex justify-content-center align-items-center"
        }
      >

        {/* two button for open and close fo menu  start*/}
        <div className="mobile-navber-btn">
          <CloseIcon className="mobile-nav-icon close-outline" onClick={() => setmenuIcon(false)}/>
        </div>
        {/* two button for open and close fo menu end*/}
        <ul className="navbar-list mt-2">
          <li>
            <NavLink
              to="/"
              className="nav-link home-link"
              onClick={() => setmenuIcon(false)}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="nav-link home-link"
              onClick={() => setmenuIcon(false)}
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              className="nav-link home-link"
              onClick={() => setmenuIcon(false)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="nav-link home-link"
              onClick={() => setmenuIcon(false)}
            >
              Contact
            </NavLink>
          </li>
          <li className="text-danger fw-bold"></li>
          <li className="loginbtn d-flex gap-3 align-items-center">
            {user ? (
              <>
                <div className="welcome-message d-flex align-items-center gap-3">
                  <img
                    className="user-photo"
                    src={user.photoURL}
                    alt="User Avatar"
                  />
                  <p className="greeting mb-0">Welcome, {user.displayName}</p>
                </div>
                <button className="button logout-btn" onClick={handleLogout}>
                  Log Out
                </button>
              </>
            ) : (
              <button className="button login-btn" onClick={handleLogin}>
                Log In
              </button>
            )}
          </li>

          <li>
            <NavLink
              to="/cart"
              className="nav-link home-link"
              onClick={() => setmenuIcon(false)}
            >
              <ShoppingCartIcon className="cart-trolly" />
              <span className="carttotal">{total_item}</span>
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
