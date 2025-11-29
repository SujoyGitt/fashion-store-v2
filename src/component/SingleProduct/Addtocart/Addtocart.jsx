import React, { useState } from "react";
import CheckIcon from "@mui/icons-material/Check";
import "./Addtocart.css";
import { Carttotalamount } from "./Carttotalamount/Carttotalamount";

export const Addtocart = ({ product }) => {
  // Default values to avoid errors
  const { id, colors = ["#000"], stock = 10 } = product;

  const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const dec = () => setAmount(prev => (prev > 1 ? prev - 1 : 1));
  const inc = () => setAmount(prev => (prev < stock ? prev + 1 : stock));

  return (
    <>
      <div className="colors d-flex justify-content-between align-items-center">
        {colors.map((c, index) => (
          <button
            key={index}
            className={color === c ? "btnactive" : ""}
            style={{ background: c }}
            onClick={() => setColor(c)}
          >
            {color === c && <CheckIcon />}
          </button>
        ))}
      </div>

      <Carttotalamount
        amount={amount}
        setdec={dec}
        setinc={inc}
        product={product}
        id={id}
        color={color}
      />
    </>
  );
};
