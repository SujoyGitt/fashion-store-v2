import React from "react";
import "./Carttotalamount.css";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../../../../Context/Cart_context";
export const Carttotalamount = ({
  amount,
  setdec,
  setinc,
  product,
  id,
  color,
}) => {
  let { addtoCart } = useCartContext();

  return (
    <div className="cart-button">
      <div className="amount-toggle d-flex align-items-center gap-3 my-3">
        <button className="qty-btn" onClick={setdec}>
          <RemoveIcon />
        </button>
        <div className="amount-style fs-5 fw-semibold">{amount}</div>
        <button className="qty-btn" onClick={setinc}>
          <AddIcon />
        </button>
      </div>
      <NavLink
        to="/cart"
        className="btn cartbtn w-100 py-2 mt-2"
        onClick={() => addtoCart(id, color, amount, product)}
      >
        Add to Cart
      </NavLink>
    </div>
  );
};
