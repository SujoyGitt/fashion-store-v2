import React, { useEffect, useState } from 'react';
import "../Hero/Hero.css";
import img1 from "../Hero/img/family.jpg";
import img2 from "../Hero/img/Smileman.jpg";
import img3 from "../Hero/img/kids.jpg";
import img4 from "../Hero/img/teal.jpg";
import { ArrowRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      tag: "Welcome To",
      title: "Fashion Store",
      description: "Discover the latest trends in fashion with exclusive collections designed for modern lifestyle",
      image: img1,
      icon: Sparkles,
      gradient: "from-blue-500 to-purple-600"
    },
    {
      id: 2,
      tag: "Exclusive Summer Sale",
      title: "55% Discount",
      description: "Beat the heat with our stunning summer collection at unbeatable prices",
      image: img2,
      icon: TrendingUp,
      gradient: "from-pink-500 to-orange-500"
    },
    {
      id: 3,
      tag: "Kids Special Offer",
      title: "Up to 70% Off",
      description: "Premium quality clothing for your little ones at amazing discounts",
      image: img3,
      icon: Zap,
      gradient: "from-green-500 to-teal-500"
    },
    {
      id: 4,
      tag: "Men's Fashion",
      title: "55% Special Offers",
      description: "Elevate your style with our premium men's collection",
      image: img4,
      icon: Sparkles,
      gradient: "from-indigo-500 to-blue-600"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);


  return (
    <div className='outer_full_width container-fluid hero-wrapper'>
      <div className="hero-container">
        <div className="hero-slides">
          {slides.map((slide, index) => {
            const IconComponent = slide.icon;
            return (
              <div
                key={slide.id}
                className={`hero-slide ${currentSlide === index ? 'active' : ''}`}
              >
                <div className="slide-content">
                  <div className="slide-text">
                    <div className="slide-tag">
                      <IconComponent size={16} />
                      {slide.tag}
                    </div>
                    <h1 className="slide-title">{slide.title}</h1>
                    <p className="slide-description">{slide.description}</p>
                    <div className="slide-actions">
                      <button className="btn-primary">
                        Shop Now
                        <ArrowRight size={20} />
                      </button>
                      <button className="btn-secondary">
                        Learn More
                      </button>
                    </div>
                  </div>

                  <div className="slide-image-wrapper">
                    <div 
                      className="slide-image-bg" 
                      style={{
                        background: `linear-gradient(135deg, ${
                          slide.gradient === 'from-blue-500 to-purple-600' ? '#3b82f6, #8b5cf6' :
                          slide.gradient === 'from-pink-500 to-orange-500' ? '#ec4899, #f97316' :
                          slide.gradient === 'from-green-500 to-teal-500' ? '#22c55e, #14b8a6' :
                          '#6366f1, #3b82f6'
                        })`
                      }}
                    />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="slide-image"
                    />
                    <div className="slide-image-overlay" />
                    
                    {index === currentSlide && (
                      <div className="floating-badge">
                        <div className="badge-text">Save Up To</div>
                        <div className="badge-value">70%</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          <div className="slide-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`indicator ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <div className="stats-bar">
            <div className="stat-item">
              <div className="stat-value">10k+</div>
              <div className="stat-label">Products</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">50k+</div>
              <div className="stat-label">Customers</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">4.9★</div>
              <div className="stat-label">Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
