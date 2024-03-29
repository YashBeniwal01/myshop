// ClickableObject.js
import React from 'react';
import { Link } from 'react-router-dom';
import Product from './Product';
import "./Box.css"
import "./Product.css"
function Box() {
  // Function to handle click event and open a new page

  const products = [
    { name: "Most Wanted", price: "7999", id: 1 },
    { name: "Sammer", price: "6999", id: 2 },
    // Add more product data as needed
  ];

 

  return (
    <div className='idea'>
    <div className='image-container'>

    {products.map(product => (
          <Link key={product.id} to={`/items/${product.id}`} className={`product-image image${product.id}`}>
            <div className="image-text">
              <h4>{product.name}</h4>
              <p>{product.price} Rs.</p>
            </div>
          </Link>
        ))}
        <div className = "product-image image2">
                    <div className="image-text">
                        <h4>Sammer</h4>
                        <p>6999 Rs.</p>
                    </div>
        </div>
        <div className = "product-image imagey">
                    <div className="image-text">
                        <h4>Sammer pro</h4>
                        <p>7499 Rs.</p>
                    </div>
        </div>
        <div className = "product-image imagez">
                    <div className="image-text">
                        <h4>Air Snow</h4>
                        <p>6599 Rs.</p>
                    </div>
        </div>

        <div className = "product-image imagey">
                    <div className="image-text">
                        <h4>Sammer pro</h4>
                        <p>7499 Rs.</p>
                    </div>
        </div>
        <div className = "product-image imagez">
                    <div className="image-text">
                        <h4>Air Snow</h4>
                        <p>6599 Rs.</p>
                    </div>
        </div>

        <div className = "product-image image1">
                    <div className="image-text">
                        <h4>Most Wanted</h4>
                        <p>7999 Rs.</p>
                    </div>
        </div>
        <div className = "product-image imagex">
                    <div className="image-text">
                        <h4>Sammer</h4>
                        <p>6999 Rs.</p>
                    </div>
        </div>

        <div className = "product-image imagez">
                    <div className="image-text">
                        <h4>Air Snow</h4>
                        <p>6599 Rs.</p>
                    </div>
        </div>

        <div className = "product-image imagey">
                    <div className="image-text">
                        <h4>Sammer pro</h4>
                        <p>7499 Rs.</p>
                    </div>
        </div>

        <div className = "product-image imagey">
                    <div className="image-text">
                        <h4>Sammer pro</h4>
                        <p>7499 Rs.</p>
                    </div>
        </div>

        <div className = "product-image imagey">
                    <div className="image-text">
                        <h4>Sammer</h4>
                        <p>6999 Rs.</p>
                    </div>
        </div>
       

      
    </div>
    </div>
  );
}

export default Box;
