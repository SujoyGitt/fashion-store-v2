import React from "react";
import "./Filtersection.css";
import { useFitercontext } from "../../../Context/Filter_context";
import { Formatprice } from "../../../Helpers/Formatprice";

import CheckIcon from "@mui/icons-material/Check";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

import { useState } from "react";
export const Filtersection = () => {
  let [rotate, setrotate] = useState(false);
  let togglefun = () => {
    if (!rotate) {
      setrotate(true);
    } else {
      setrotate(false);
    }
  };
  let {
    filters: { text, colors, price, maxPrice, minPrice },
    updatefiltervalue,
    all_products,
    clearfilters,
  } = useFitercontext();
  //to get the unique data of each field
  let getuniquedata = (data, prototype) => {
    let newval = data.map((currentelm) => {
      return currentelm[prototype];
    });
    if (prototype === "colors") {
      // return newval = ["All",...new Set([].concat(...newval))];
      newval = newval.flat();
    }
    return (newval = ["All", ...new Set(newval)]);
  };
  //we need to have indivisual data of each in an arry format
  const categoryonlydata = getuniquedata(all_products, "category");
  const companyonlydata = getuniquedata(all_products, "company");
  const colorsdata = getuniquedata(all_products, "colors");

  return (
    <div className={rotate ? "filtersection activerotate" : "filtersection"}>
      {/* Mobile Toggle - Using Bootstrap */}
      <div className="filter-toggle d-block d-md-none" onClick={togglefun}>
        <KeyboardArrowDownIcon />
      </div>

      {/* Search - Using Bootstrap */}
      <div className="row">
        <div className="col-12 filter-search mb-4">
          <form onSubmit={(e) => e.preventDefault()}>
            <input
              type="text"
              name="text"
              value={text}
              onChange={updatefiltervalue}
              placeholder="Search products..."
            />
          </form>
        </div>
      </div>

      {/* Category - Using Bootstrap */}
      <div className="row mb-4">
        <div className="col-12 filter-catagory">
          <h5 className="filter-section-title">Category</h5>
          {categoryonlydata.map((currentdta, id) => (
            <button
              type="button"
              key={id}
              name="category"
              value={currentdta}
              onClick={updatefiltervalue}
            >
              {currentdta}
            </button>
          ))}
        </div>
      </div>

      {/* Company - Using Bootstrap */}
      <div className="row mb-4">
        <div className="col-12 filter-company">
          <h5 className="filter-section-title">Company</h5>
          <select
            name="company"
            className="filter-company-select"
            onChange={updatefiltervalue}
          >
            {companyonlydata.map((currentdata, index) => (
              <option value={currentdata} key={index} name="company">
                {currentdata}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Colors - Using Bootstrap */}
      <div className="row mb-4">
        <div className="col-12 filter-colors">
          <h5 className="filter-section-title">Colors</h5>
          {colorsdata.map((currentdta, index) => {
            if (currentdta === "All") {
              return (
                <button
                  key={index}
                  value={currentdta}
                  name="colors"
                  onClick={updatefiltervalue}
                  className={colors === currentdta ? "btnactive" : ""}
                >
                  All
                </button>
              );
            }

            return (
              <button
                key={index}
                value={currentdta}
                name="colors"
                onClick={updatefiltervalue}
                style={{ background: currentdta }}
                className={colors === currentdta ? "btnactive" : ""}
              >
                {colors === currentdta && <CheckIcon />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price Range - Using Bootstrap */}
      <div className="row mb-4">
        <div className="col-12 filter-price">
          <h5 className="filter-section-title">Price</h5>
          <p>
            <Formatprice price={price} />
          </p>
          <input
            type="range"
            max={maxPrice}
            min={minPrice}
            value={price}
            onChange={updatefiltervalue}
            name="price"
          />
        </div>
      </div>

      {/* Clear Filters - Using Bootstrap */}
      <div className="row">
        <div className="col-12 filter-clear">
          <button className="btn" onClick={clearfilters}>
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};
