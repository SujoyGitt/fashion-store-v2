import React from 'react'
import  "./Cartitem.css";
import {Formatprice} from "../../../Helpers/Formatprice";
import  { Carttotalamount } from "../../SingleProduct/Addtocart/Carttotalamount/Carttotalamount";
import DeleteIcon from '@mui/icons-material/Delete';
import { useCartContext } from '../../../Context/Cart_context';
import { Trash2 } from 'lucide-react';
export const Cartitem = ({id,Name,color,image,price,amount}) => {
  let {deletecartdata,setdecrease,setincrease} = useCartContext(); 

  return (
 <div className="cart-item">
      <div className="row g-0 align-items-center">
        {/* Product Image and Info */}
        <div className="col-12 col-sm-5 col-md-4">
          <div className="row g-3 align-items-center">
            <div className="col-4 col-sm-5">
              <div className="cart-item-image-wrapper">
                <img src={image} alt={Name} />
              </div>
            </div>
            <div className="col-8 col-sm-7">
              <div className="cart-item-info">
                <div className="cart-item-name">{Name}</div>
                <div className="cart-item-color-section">
                  <span className="color-label">Color:</span>
                  <span 
                    className="color-style" 
                    style={{ backgroundColor: color }}
                    title={color}
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Price - Desktop Only */}
        <div className="d-none d-sm-block col-sm-2">
          <div className="cart-item-price">
            <p><Formatprice price={price} /></p>
          </div>
        </div>

        {/* Quantity Controls */}
        <div className="col-6 col-sm-3">
          <div className="cart-item-quantity">
            <Carttotalamount 
              amount={amount} 
              setdec={() => setdecrease(id)} 
              setinc={() => setincrease(id)} 
            />
            
          </div>
        </div>

        {/* Subtotal - Desktop Only */}
        <div className="d-none d-sm-block col-sm-2">
          <div className="cart-item-subtotal">
            <p><Formatprice price={price * amount} /></p>
          </div>
        </div>

        {/* Delete Button */}
        <div className="col-6 col-sm-1 d-flex justify-content-end justify-content-sm-center">
          <div className="delete-icon">
            <button 
              className="delete-icon-btn"
              onClick={() => deletecartdata(id)}
              aria-label="Remove item"
            >
              <Trash2 size={20} />
            </button>
          </div>
        </div>

        {/* Mobile Price and Subtotal */}
        <div className="col-12 d-sm-none">
          <div className="mobile-price-info">
            <div className="mobile-price-row">
              <span className="mobile-price-label">Price:</span>
              <span className="mobile-price-value">
                <Formatprice price={price} />
              </span>
            </div>
            <div className="mobile-price-row">
              <span className="mobile-price-label">Subtotal:</span>
              <span className="mobile-price-value">
                <Formatprice price={price * amount} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
