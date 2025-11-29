import { useState } from "react";
import "./Myimg.css";

let Myimg = ({ img }) => {
  const [mainImg, setMainImg] = useState(0);

  if (img && img.length > 0) {
    return (
        <div className="row">
          {/* Thumbnails */}
          <div className="col-12 col-md-4 singleproductimgmultiple">
            <div className="row g-1">
              {img.map((currentElem, id) => (
                <div
                  className="col-3 col-md-12 pb-2"
                  key={id}
                  onMouseEnter={() => setMainImg(id)}
                >
                  <img
                    src={currentElem}
                    className="img-fluid"
                    alt={`product-${id}`}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Main image */}
          <div className="col-12 col-md-8 d-flex justify-content-center align-items-center">
            <img
              src={img[mainImg]}
              className="img-fluid"
              alt={`product-main-${mainImg}`}
            />
          </div>
        </div>
    
    );
  } else {
    return <div>No images found.</div>;
  }
};

export default Myimg;
