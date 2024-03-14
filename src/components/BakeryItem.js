// TODO: create a component that displays a single bakery item

import React from "react";

const BakeryItem = ({ item, addToCart }) => {
    return (
        <div className="bakeryItem">
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <h2>{item.price}</h2>

            <button onClick={() => addToCart(item.price, item.name)}>
                Add to Cart
            </button>

            <img className="bakeryPic" src={item.image} alt="image" />
        </div>
    );
};

export default BakeryItem;