import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

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
                  <img className='iphone-png' src="public\—Pngtree—iphone 14 vector illustrations vectors_15424528.png" alt="png of iphone" />
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
         </div>
      </div>
   );
}
export default DeviceLand;