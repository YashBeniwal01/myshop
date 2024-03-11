import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./Items.css";

const Items = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Simulated product data or fetch data from an API
        const products = [
            { id: 1, name: "Most Wanted 80L cooler", price: "7990", brand: "Most Wanted", motor: "exhaust motor", color: "Black", capacity: "80L", imageUrl: require("./images/cool2.png").default },
            { id: 2, name: "Sammer cooler", price: "7990", brand: "Most Wanted", motor: "exhaust motor", color: "Black", capacity: "80L",imageUrl: require("./images/cool1.png").default },
        ];

        const foundProduct = products.find(product => product.id === parseInt(id));
        if (foundProduct) {
            setProduct(foundProduct);
        }
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }

    return (
        <div className="item-container">
            <div className="item-image myimage">

            </div>

            <div className="item-details">
                <h1>{product.name}</h1>
                <h3>{product.price}<sub>(price for Dealers only)</sub></h3>

                <div className="item-description">
                    <h2>Description</h2>
                    <p><strong>Brand: </strong>{product.brand}</p>
                    <p><strong>Motor: </strong>{product.motor}</p>
                    <p><strong>Color: </strong>{product.color}</p>
                    <p><strong>Capacity: </strong>{product.capacity}</p>
                </div>

                <button className="add-cart">Add to Cart</button>
                <Link to="/contact"><button className="ask-query">Ask for query</button></Link>
            </div>
        </div>
    );
}

export default Items;
