import React from 'react'
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SaveIcon from '@mui/icons-material/Save';
import SecurityIcon from '@mui/icons-material/Security';
import PaymentIcon from '@mui/icons-material/Payment';

import "../Services/Services.css";
import { Award, CreditCard, PackageCheck, Shield, Truck } from 'lucide-react';

export const Services = () => {
  return (
     <div className='servicecontainer container-fluid'>
      <div className="services-wrapper">
        {/* Services Header */}
        <div className="services-header">
          <div className="services-badge">
            <Award size={16} />
            OUR SERVICES
          </div>
          <h2 className="services-title">Why Choose Us</h2>
          <p className="services-description">
            We provide exceptional service with unmatched quality and commitment
          </p>
        </div>

        {/* Services Grid */}
        <div className="row g-4">
          {/* Large Service Card 1 - Fast Delivery */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service-card large-service-card">
              <div className="service-card-content">
                <div className="servicelogo">
                  <Truck size={40} />
                </div>
                <h3 className="service-title">Super Fast Delivery</h3>
                <p className="service-description">
                  Get your orders delivered quickly with our express shipping service at no extra cost
                </p>
              </div>
            </div>
          </div>

          {/* Split Service Cards - Two stacked */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="split-service-card">
              <div className="split-service-item">
                <div className="servicelogo">
                  <PackageCheck size={28} />
                </div>
                <div className="split-service-text">
                  <h3 className="service-title">Non-Contact Shipping</h3>
                </div>
              </div>
              <div className="split-service-item">
                <div className="servicelogo">
                  <CreditCard size={28} />
                </div>
                <div className="split-service-text">
                  <h3 className="service-title">Money-Back Guarantee</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Large Service Card 2 - Security */}
          <div className="col-12 col-md-6 col-lg-4">
            <div className="service-card large-service-card">
              <div className="service-card-content">
                <div className="servicelogo">
                  <Shield size={40} />
                </div>
                <h3 className="service-title">Secure Payment</h3>
                <p className="service-description">
                  Shop with confidence using our secure payment gateway and data protection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
