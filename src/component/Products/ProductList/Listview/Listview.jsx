import React from "react";
import "./Listview.css";
import { Formatprice } from "../../../../Helpers/Formatprice";
import { NavLink } from "react-router-dom";

export const Listview = ({ products }) => {
  return (
    <>
      {products.map((currentelem, index) => {
        let { id, name, image, price, description } = currentelem;
        return (
          <>
            <div className="col-12 mb-3" key={id}>
              <div className="Listview card border-0">
                <div className="row g-0">
                  {/* Image - Bootstrap col */}
                  <div className="col-12 col-sm-5 listviewimg">
                    <img
                      src={image}
                      alt={name}
                      className=""
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src =
                          "https://media.istockphoto.com/id/1396814518/vector/image-coming-soon-no-photo-no-thumbnail-image-available-vector-illustration.jpg?s=612x612&w=0&k=20&c=hnh2OZgQGhf0b46-J2z7aHbIWwq8HNlSDaNp2wn_iko=";
                      }}
                    />
                  </div>

                  {/* Content - Bootstrap col */}
                  <div className="col-12 col-sm-7 d-flex align-items-center">
                    <div className="listview-content w-100">
                      <h3>{name}</h3>
                      <div className="listview-price">
                        <Formatprice price={price} />
                      </div>
                      <p>{description?.slice(0, 150)}...</p>
                      <NavLink to={`/singleproducts/${id}`} className="btn">
                        Read More
                      </NavLink>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};
