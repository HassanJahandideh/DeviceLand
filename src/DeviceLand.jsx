import products  from './data/products.js';
import { features } from './data/features.js';
import { reviews } from './data/features.js';

import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faStar } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faThreads } from '@fortawesome/free-brands-svg-icons';

function DeviceLand() {
   const [isNavOpen, setIsNavOpen] = useState(false);
   const toggleNav = () => {
      setIsNavOpen(prev => !prev);
   }

   return (
      <div className="main-container">
         <div className="inside-container">
            <nav>
               <h1 className="brand-name">
                  DeviceLand
               </h1>

               <button className="menu-icon" aria-label="Open menu" onClick={toggleNav}>
                  <FontAwesomeIcon icon={isNavOpen ? faXmark : faBars} size="2x" className='menu-icon-animation' />
               </button>
            </nav>
               <ul className={isNavOpen ? 'toggle-nav open' : 'toggle-nav close'}>
                     <li><a className='toggle-links'  href="#products">Products</a></li>
                     <li><a className='toggle-links' href="#contact">Contact</a></li>
                     <li><a className='toggle-links' href="#about">About</a></li>
                  </ul>
            {/* Discovery section */}
            <div className="discovery-container">
               <h4 className="discovery-text">
                  Discover
               </h4>
               <div className="phone-container">
            <img className='iphone-png' src="image/iPhoneFrame.png" alt="iPhone 14" />
               </div>
               <h1 className="find-latest">Find The Latest Device</h1>
            </div>
            {/* category and sort by */}
            <h1 className="discovery">Discovery</h1>
            <div className="filters-container">
               
               <div className="filter">
                  <select defaultValue="" id="category">
                     <option value="" disabled>Category</option>
                     <option value="all">All</option>
                     <option value="phones">Phones</option>
                     <option value="laptops">Laptops</option>
                     <option value="accessories">Accessories</option>
                  </select>
               </div>

               <div className="filter">
                  <select defaultValue="" id="sort">
                     <option value="" disabled>Sort By</option>
                     <option value="latest">Latest</option>
                     <option value="priceLowHigh">Price: Low to High</option>
                     <option value="priceHighLow">Price: High to Low</option>
                  </select>
               </div>
            </div>
            {/* products */}
            
            <div className="product-container">
               {products.map((product) => (
                  <div className="product-details"
                     key={product.id}>  
                     <div className="product-image-container">
                        <img src={product.image} alt="iPhone 16 Pro Max" className="product-image" />
                     </div>
                     <h2 className="product-company">{product.company}</h2>

                     <h2 className="product-name">{product.name}</h2>
                     <p className="small-detail">6.9-inch display</p>
                     <div className="star">
                        {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} style={{ color: '#FFD700' }} />
                     ))}
                     </div>
                     <p className="product-price">{product.price}</p>
                     <button className="addtocart">Add to Cart</button>
                  </div>
               ))}
            </div>
            <h1 className="why-dl">
               Why DeviceLand
            </h1>
            <section className="features-container">
               {features.map((feature) => (
                  <div className="features"
                     key={feature.id}>
                     <FontAwesomeIcon icon={feature.icon} size="3x" className="feature-icon" />
                     <h2>{feature.title}</h2>
                  </div>
               ))}
            </section>
            <h2 className="user-review-h2">
               User Reviews
            </h2>
            <section className="reviews-container">
               {reviews.map((review) => (
                  <div className="reviews" key={review.id}>
                     <img src={review.image} alt="user avatar" className="user-avatar" />

                     <div className="review-content">
                        <p className="user-name">
                           {review.name}
                        </p>

                        <div className="user-star">
                        {[...Array(5)].map((_, i) => (
                        <FontAwesomeIcon key={i} icon={faStar} style={{ color: '#FFD700' }} />
                        ))}
                        </div>

                        <p className="user-text">
                           {review.text}
                        </p>
                     </div>
                  </div>
               ))}
            </section>
            <footer>
               <h2 className="footer-logo">DeviceLand</h2>
               <p className="year">@2025</p>
               
               <div className="social-container">
                  <a href="">
                     <FontAwesomeIcon className='footer-social' icon={faInstagram} size="lg" style={{ color: "#fff" }} />
                  </a>
                  <a href="">
                     <FontAwesomeIcon className='footer-social' icon={faTwitter} size="lg" style={{ color: "#fff" }} />
                  </a>
                  <a href="">
                     <FontAwesomeIcon className='footer-social' icon={faThreads} size="lg" style={{ color: "#fff" }} />
                  </a>
               </div>
            </footer>
         </div>
      </div>
   );
}
export default DeviceLand;