import React from 'react';
import './Product.css';

const Product = ()=>{
    return (
        <div className="product-container">
            <div className='productTitle'>
                <h1>Shop by category</h1>
            </div>
            <div className = "image-container">
                <div className = "product-image image1">
                    <div className="image-text">
                        <h4>Most Wanted</h4>
                        <p>7 versions</p>
                    </div>
                </div>
                <div className = "product-image image2">
                <div className="image-text">
                        <h4>Yash</h4>
                        <p>With different shapes</p>
                    </div>
                </div>
                <div className = "product-image image3">
                <div className="image-text">
                        <h4>Fridge Stand</h4>
                        <p>Strong stable</p>
                    </div>
                </div>
                <div className = "product-image image4">
                    <div className="image-text">
                        <h4>Refridgerator</h4>
                        <p>Cooling engine</p>
                    </div>
                </div>
                
            </div>

            
        </div>
    );
}

export default Product;