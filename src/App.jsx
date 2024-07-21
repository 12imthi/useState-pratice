// App.js
import React, { useState } from 'react';
import './App.css';

const items = [
  { id: 1, name: 'Item 1', price: 10, quantity: 10 },
  { id: 2, name: 'Item 2', price: 15, quantity: 10 },
  { id: 3, name: 'Item 3', price: 20, quantity: 10 },
  { id: 4, name: 'Item 4', price: 25, quantity: 10 },
  { id: 5, name: 'Item 5', price: 30, quantity: 10 },
  { id: 6, name: 'Item 6', price: 35, quantity: 10 },
  { id: 7, name: 'Item 7', price: 40, quantity: 10 },
  { id: 8, name: 'Item 8', price: 45, quantity: 10 },
  { id: 9, name: 'Item 9', price: 50, quantity: 10 },
  { id: 10, name: 'Item 10', price: 55, quantity: 10 },
];

function App() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [quantities, setQuantities] = useState(items.reduce((acc, item) => {
    acc[item.id] = 1; // Initialize each item quantity to 1
    return acc;
  }, {}));

  const handleQuantityChange = (itemId, amount) => {
    setQuantities((prevQuantities) => {

      console.log('prevQuantities ;',prevQuantities);
      const newQuantities = { ...prevQuantities, [itemId]: prevQuantities[itemId] + amount };
      updateTotalPrice(newQuantities);
      return newQuantities;
    });
  };

  const updateTotalPrice = (newQuantities) => {
    const newTotalPrice = Object.keys(newQuantities).reduce((total, id) => {
      const item = items.find(item => item.id === parseInt(id));
      return total + item.price * newQuantities[id];
    }, 0);
    setTotalPrice(newTotalPrice);
  };

  const addToCart = (itemId) => {
    setCartTotalPrice(totalPrice);
  };

  return (
    <>
      <h1>Shopping Cart</h1>
      <h2>Live Total Price: ${totalPrice}</h2>
      <h2>Cart Total Price: ${cartTotalPrice}</h2>

      <h3>Items</h3>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price}
            <div>
              <button onClick={() => handleQuantityChange(item.id, -1)} disabled={quantities[item.id] <= 1}>-</button>
              <span>{quantities[item.id]}</span>
              <button onClick={() => handleQuantityChange(item.id, 1)}>+</button>
            </div>
            <button onClick={() => addToCart(item.id)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default App;
