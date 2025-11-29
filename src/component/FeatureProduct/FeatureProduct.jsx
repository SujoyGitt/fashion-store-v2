import React from 'react';
import { UseProductcontext } from '../../Context/Productcontext';
import { Sparkles } from 'lucide-react';
import './FeatureProduct.css';
import { Products } from './Products';

export const FeatureProduct = () => {
  const { isLoading, featuresProducts } = UseProductcontext();
  if (isLoading) {
    return (
      <div className='FeatureProduct container-fluid'>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <div className="loading-text">Loading Amazing Products...</div>
        </div>
      </div>
    );
  }
  
  return (
    <div className='FeatureProduct container-fluid'>
      <div className="feature-container">
        <div className="section-header">
          <div className="section-badge">
            <Sparkles size={16} />
            CHECK NOW!
          </div>
          <h2 className="section-title">Our Featured Products</h2>
          <p className="section-description">
            Discover our handpicked collection of trending items curated just for you
          </p>
        </div>
        
        <div className="row justify-content-center g-4">
          {featuresProducts.map((currentelm) => {
            return (
              <div key={currentelm.id} className="col-12 col-sm-6 col-lg-4 col-xl-3 product-card-wrapper">
                <Products {...currentelm} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};