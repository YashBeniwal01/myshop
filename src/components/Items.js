import React from "react";
import { Link } from "react-router-dom";
import "./Items.css";
const Items = () => {
    return (
        <div className="item-container">
        <div className = "item-image myimage">
    
            
        </div>

        <div className = "item-details">
            <h1>Most Wanted 80L cooler</h1>
            <h3>7990 Rs. <sub>(price for Dealers only)</sub> </h3>
 
            <div className="item-description">
                <h2>Description</h2>
                <p><strong>Brand: </strong>Most Wanted</p>
                <p><strong>Motor: </strong>exhust motor</p>
                <p><strong>Color: </strong>Black</p>
                <p><strong>Capacity: </strong>80L</p>
            </div>

            <Link to="/contact"><button className="add-cart">Add to Cart</button></Link>
            <button className="ask-query">Ask for Query</button>

        </div>
        </div>
    );
}

export default Items;