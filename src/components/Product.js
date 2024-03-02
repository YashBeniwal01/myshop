import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Box from './Box';
import './Product.css';

const Product = ()=>{
    return (
        <div className="product-container">
            <div className='productTitle'>
                <h1>Shop by category</h1>
            </div>
            <div className = "image-container">
                
                
                     
                <div className = "product-image image1">          
                    <Link to= "/box">
                    <div className="image-text">
                        <h4>Most Wanted</h4>
                        <p>7 versions</p>
                    </div>              
                    </Link>
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

                <div className = "product-image image5">
                    <div className="image-text">
                        <h4>Sofa</h4>
                        <p>Best comfort material</p>
                    </div>
                </div>

                <div className = "product-image image6">
                    <div className="image-text">
                        <h4>Fan</h4>
                        <p>Max air quality</p>
                    </div>
                </div>

                <div className = "product-image image7">
                    <div className="image-text">
                        <h4>Bed</h4>
                        <p>Relax sleepwell</p>
                    </div>
                </div>

                <div className = "product-image image8">
                    <div className="image-text">
                        <h4>Almirah</h4>
                        <p>with strong material</p>
                    </div>
                </div>
                
            </div>

            
        </div>
    );
}

export default Product;