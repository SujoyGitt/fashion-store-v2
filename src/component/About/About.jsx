import React from 'react';
import { UseProductcontext } from '../../Context/Productcontext';
import { Hero } from '../Home/Hero/Hero';
import  "./About.css";

export const About = () => {
  let {Myname} = UseProductcontext;

  return (
    <>
    {Myname}
      <Hero title="fashion Eccomers"/>
      <div className="about-wrapper">
  <div className="container about-hero">
    <div className="about-text">
      <h1>About Our Store</h1>
      <p>
        We bring you the best products with top-notch quality and unmatched
        customer service. Shop with confidence and enjoy a seamless buying
        experience.
      </p>
      <button className="about-btn">Explore Products</button>
    </div>

    <div className="about-image">
      <img
        src="https://img.freepik.com/free-vector/scientific-articles-writing-flat-composition-with-icons-thought-bubbles-documents-envelopes-with-tablet-hands-vector-illustration_98292-8982.jpg?semt=ais_hybrid&w=740&q=80"
        alt="About Ecommerce"
      />
    </div>
  </div>

  {/* Stats Section */}
  <div className="about-stats container">
    <div className="stat-card">
      <h2>10K+</h2>
      <p>Happy Customers</p>
    </div>
    <div className="stat-card">
      <h2>500+</h2>
      <p>Products Available</p>
    </div>
    <div className="stat-card">
      <h2>4.9★</h2>
      <p>Customer Rating</p>
    </div>
  </div>
</div>

      </>
  )
}
