import "./App.css";
import {useState, useEffect } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem.js";


/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [bakeryItems, setBakeryItems] = useState(bakeryData);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const loadData = () => {
    setBakeryItems(bakeryData);
  };

  useEffect(() => {
    // Loads data
    loadData();
  }, [cartItems]); // updates cart items 

  // Add item to our cart
  const addToCart = (price, name) => {
      setTotalPrice((prevTotal) => prevTotal + price);
      setCartItems((prevCart) => [...prevCart, name]);
  };

  return (
    <div className="App">
      <h1>Levi's Bakery</h1> 

      {bakeryItems.map((item, index) => (
                <BakeryItem key={index} item={item} addToCart={addToCart} />
            ))}
      <div>
          <h2>Cart</h2>
          Your Total: ${totalPrice}
          {cartItems.map((name, index) => (
          <p key={index}>{name}</p>
          ))}
      </div>

    </div>
  );
}

export default App;
