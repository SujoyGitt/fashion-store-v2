import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { UseProductcontext } from "../../Context/Productcontext";
import { Pagenavigation } from "../Pagenavigation/Pagenavigation";
import { Formatprice } from "../../Helpers/Formatprice";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import FindReplaceIcon from "@mui/icons-material/FindReplace";
import SecurityIcon from "@mui/icons-material/Security";
import Myimg from "./Myimg/Myimg";
import "./Singleproducts.css";
import { Addtocart } from "./Addtocart/Addtocart";
import { Award } from "lucide-react";

const API = "https://api.escuelajs.co/api/v1/products";

export const Singleproduct = () => {
  const { getSingleProduct, issingleLoading, singleproduct } = UseProductcontext();
  const { id } = useParams();

  console.log(singleproduct);

  // Destructure safely with defaults
  const {
    title: name = "",
    price = 0,
    description = "",
    images = [],
    category = {},
  } = singleproduct || {};

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, [id]);

if (!singleproduct || Object.keys(singleproduct).length === 0) {
  return <div>......Loading</div>;
}

return (
<div className="Singleproduct container-fluid g-0">
      <Pagenavigation title={name} />
      
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-11">
            <div className="product-detail-card">
              <div className="row g-4 align-items-start">
                {/* Product Images */}
                {images && images.length > 0 && (
                  <div className="col-12 col-md-6">
                    <Myimg img={images} />
                  </div>
                )}

                {/* Product Details */}
                <div className="col-12 col-md-6">
                  {/* Title */}
                  <h1 className="product-title">{name}</h1>

                  {/* Price Section */}
                  <div className="product-price-section">
                    <p className="product-mrp mb-2">
                      MRP: <del><Formatprice price={price + 250000} /></del>
                    </p>
                    <p className="product-deal-price mb-0">
                      Deal of the Day: <span><Formatprice price={price} /></span>
                    </p>
                  </div>

                  {/* Description */}
                  <p className="product-description">{description}</p>

                  {/* Features */}
                  <div className="product-features">
                    <div className="row g-3">
                      <div className="col-6 col-sm-3">
                        <div className="feature-item">
                          <div className="feature-icon">
                            <LocalShippingIcon />
                          </div>
                          <p className="feature-text mb-0">Free Delivery</p>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="feature-item">
                          <div className="feature-icon">
                            <FindReplaceIcon />
                          </div>
                          <p className="feature-text mb-0">30 Days Replacement</p>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="feature-item">
                          <div className="feature-icon">
                            <Award size={28} />
                          </div>
                          <p className="feature-text mb-0">Fashion Delivered</p>
                        </div>
                      </div>
                      <div className="col-6 col-sm-3">
                        <div className="feature-item">
                          <div className="feature-icon">
                            <SecurityIcon />
                          </div>
                          <p className="feature-text mb-0">2 Years Warranty</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="product-info-section">
                    <div className="product-info-item">
                      <span className="product-info-label">Product ID:</span>
                      <span className="product-info-value">{id}</span>
                    </div>
                    <div className="product-info-item">
                      <span className="product-info-label">Category:</span>
                      <span className="product-info-value">
                        {category?.name || "N/A"}
                      </span>
                    </div>
                    <div className="product-info-item">
                      <span className="product-info-label">Availability:</span>
                      <span className="product-info-value">In Stock</span>
                    </div>
                  </div>

                  <hr className="product-divider" />

                  {/* Add to Cart */}
                  {singleproduct && Object.keys(singleproduct).length > 0 && (
                    <Addtocart 
                      product={{ 
                        ...singleproduct, 
                        stock: singleproduct.stock ?? 10 
                      }} 
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
);


};
