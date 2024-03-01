import React from 'react';
import Product from './Product';
import Introduction from './Introduction';

const Home = () => {
    return (
        <div className = "home">
            <Introduction/>
            <Product />
        </div>

    );
}

export default Home;