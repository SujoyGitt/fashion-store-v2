import React from 'react'
import "./Sort.css";
import ListIcon from '@mui/icons-material/List';
import GridOnIcon from '@mui/icons-material/GridOn';

import { useFitercontext } from '../../../Context/Filter_context';
import { Package } from 'lucide-react';

// import { useState } from 'react';
export const Sort = () => {
 const {filter_products,grid_view,setgridview,setlistview,sorting} = useFitercontext();
  return (
   <>
<div className="container-fluid ">
  <div className="sort-filter-bar">
    <div className="row g-3 align-items-center">
      {/* View Toggle */}
      <div className="col-6 col-sm-auto">
        <div className="view-toggle">
          <span 
            className={!grid_view ? "active" : ""} 
            onClick={setlistview}
          >
            <ListIcon />
          </span>
          <span 
            className={grid_view ? "active" : ""} 
            onClick={setgridview}
          >
            <GridOnIcon />
          </span>
        </div>
      </div>

      {/* Product Count */}
      <div className="col-12 col-sm-auto order-sm-2 order-3 text-center text-sm-start">
        <div className="product-count-badge">
          <Package size={18} />
          <span>{filter_products.length}</span> Products Available
        </div>
      </div>

      {/* Sort Select */}
      <div className="col-6 col-sm-auto ms-sm-auto order-sm-3 order-2">
        <select 
          name="sort" 
          className="sort-select" 
          onChange={sorting}
        >
          <option value="lowest">Price (Lowest)</option>
          <option value="highest">Price (Highest)</option>
          <option value="a-z">Name (A-Z)</option>
          <option value="z-a">Name (Z-A)</option>
        </select>
      </div>
    </div>
  </div>
</div>
  </>
  )
}
