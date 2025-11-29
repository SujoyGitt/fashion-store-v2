import React from 'react'
import "./Trusted.css";
import ZoomOutMapSharpIcon from '@mui/icons-material/ZoomOutMapSharp';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import LocalGasStationIcon from '@mui/icons-material/LocalGasStation';
import LeakRemoveIcon from '@mui/icons-material/LeakRemove';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import { Award } from 'lucide-react';

export const Trusted = () => {
  return (
 <div className='Trusted container-fluid'>
      <div className="container">
        {/* Header */}
        <div className="trusted-header">
          <div className="trusted-badge">
            <Award size={16} />
            TRUSTED BY INDUSTRY LEADERS
          </div>
          <h2 className="trusted-title">Trusted by 100+ Companies Worldwide</h2>
        </div>

        {/* Companies Grid */}
        <div className="row justify-content-center g-4">
          <div className="col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="trusted_log">
              <ZoomOutMapSharpIcon />
              <span>ZEINA</span>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="trusted_log">
              <AddCircleOutlineRoundedIcon />
              <span>CIRCLE+</span>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="trusted_log">
              <LocalGasStationIcon />
              <span>LOGIC+</span>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="trusted_log">
              <LeakRemoveIcon />
              <span>NEXUS</span>
            </div>
          </div>

          <div className="col-6 col-sm-4 col-md-4 col-lg-2">
            <div className="trusted_log">
              <TrendingUpIcon />
              <span>CHARTZ</span>
            </div>
          </div>
        </div>

        {/* Optional: Stats Section */}
        {/* Uncomment below if you want to add statistics */}
    
        <div className="trusted-stats">
          <div className="row text-center g-4">
            <div className="col-6 col-md-3">
              <h3 className="stat-value">100+</h3>
              <p className="stat-label">Companies</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="stat-value">50k+</h3>
              <p className="stat-label">Happy Customers</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="stat-value">4.9★</h3>
              <p className="stat-label">Average Rating</p>
            </div>
            <div className="col-6 col-md-3">
              <h3 className="stat-value">24/7</h3>
              <p className="stat-label">Support</p>
            </div>
          </div>
        </div>
     
      </div>
    </div>
  )
}
