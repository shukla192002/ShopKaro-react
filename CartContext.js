// src/contexts/CartContext.js
import React, { createContext, useState } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])         //this is for cart product saving
  const [orders, setOrders] = useState([])       //this is for order procts saving

  //const addToCart = (product) => setCart((prev) => [...prev, product])

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      if (existingProduct) {
        incrementQuantity(product.id); 
      return prevCart;
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };
  
  const clearCart = () => setCart([]);

  const removeItemFromCart = (Remove) => {
    setCart((prevCart) => prevCart.filter(item => item !== Remove))
  }

  const placeOrder = (orderDetails) => {
    setOrders((prevOrders) => [...prevOrders, orderDetails])
    //clearCart(); //  clear the cart after order
  }

  const incrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (productId) => {
    setCart((prevCart) =>
      prevCart.map(item =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };


  return (
    <CartContext.Provider value={{ cart, addToCart, removeItemFromCart ,orders  ,setOrders,placeOrder , incrementQuantity, decrementQuantity }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;


// clearCart  we will be using it for placing the order from the cart directly when place order button will be invoked fo that 
// I have to invoke the buy now component as well
