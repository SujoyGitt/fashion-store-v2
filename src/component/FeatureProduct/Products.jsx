import React from "react";
import { NavLink } from "react-router-dom";
import { Eye } from "lucide-react";
import { Formatprice } from "../../Helpers/Formatprice";

export const Products = (currentelm) => {
  const { id, title, image, price, category } = currentelm;


  return (
    <NavLink  to={`/singleproducts/${id}`}  className="featureservice text-decoration-none">
      <div className="featuresimg">
      <img
        src={image}
        alt={title}
        onError={(e) => {
          e.target.onerror = null; // prevent infinite loop
          e.target.src =
            "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=";
        }}
      />

        
        <div className="quick-view-overlay">
          <button className="quick-view-btn">
            <Eye size={16} style={{ marginRight: '0.5rem' }} />
            Quick View
          </button>
        </div>
      </div>

      <div className="featurebadge">{title}</div>

      <div className="product-info-section">
        <div className="featureprice">
          <p>{category?.name}</p>
          <p>
            <Formatprice price={price} />
          </p>
        </div>
      </div>
    </NavLink>
  );
};
