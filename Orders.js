import React , {useContext } from 'react';
import './Orders.css';
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";
import { CartContext } from '../contexts/CartContext';

const Orders = () => {
  
  const { orders , setOrders } = useContext(CartContext); //from this we can access the order data which eveer is getting placed

  const handleCancelOrder = (index) => {
    const Cancelorder = window.confirm("Are you sure you want to cancel this order?");
    if (Cancelorder) {
      setOrders((prevOrders) => prevOrders.filter((_, i) => i !== index));   //alert("Order cancelled successfully!");
    }
  };

  

  return (
    <div className="home-container" id='home'>
      
            <header className="header">
                <Link to="/home" className='simple'>
                      <h1 className="logo">ShopKaro 
                            <FaShopify />
                      </h1>
                </Link>
                <nav className="navigation">
                <Link to="/Home" className="navigationlink">Home</Link>
                <a href="#products" className="navigationlink">Products</a>
                <Link to="/about" className="navigationlink">About</Link>
                <a href="#contact" className="navigationlink">Contact</a>
                <Link to="/orders" className="navigationlink">Orders</Link>
                <Link to="/cart" className="navigationlink">Cart</Link>
                <Link to="/" className='navigationlink' >logout</Link>
                </nav>
            </header>
    
    <div className="orders-container">
      <h2>Your Orders</h2>
      <div className="orders-content">
        {orders.length === 0 ? (
          <p>No orders yet.</p>                          // no orders
        ) : (
          <ul>
              {orders.map((order, i) => (
                <li key={i} >
                {/* <li style={{boxShadow:  "none"}}><img src={order.products.image} className="ordered-product-image" /></li>
                  
                  <ul>
                    <li>
                      {order.products.title} - ${order.products.price}
                    </li> */}
                    <ul className="products-list">
                    
                          {(Array.isArray(order.products) ? order.products : [order.products]).map((product, j) => (
                            <li key={j} className="product-item">
                              <img src={product.image} alt={product.title} className="ordered-product-image" />
                              <div className="product-info">
                                  <p><strong>Product:</strong> {product.title}  
                                        <p style={{padding:'20px'}}>
                                          <p style={{color:'blue'}}>Price : ${product.price}</p> 
                                          <p>Qty = {product.quantity}</p> 
                                          <p style={{color:'red'}}> ${product.price * product.quantity}</p>
                                        </p>
                                  </p>
                              </div>
                              </li>
                          ))}</ul>
                    <li><strong>Order Date:</strong> {order.date}</li>
                    <li>Address: {order.address}</li>
                    <li>Delivery Date: {order.deliveryDate}</li>
                    <li>Payment: {order.paymentOption}</li>
                    <p><strong>Grand Total:</strong> ${order.products.reduce((total, p) => total + p.price * p.quantity, 0)}</p>
                    <button className='order-cancel-btn' onClick={() => handleCancelOrder(i)} >cancel order</button>
                  
                  
                </li>
                
              ))}
            </ul>
        )}
      </div>
      <Link to="/home" className="back-link">Home <IoHome className="icon" /></Link>
    </div>
    </div>
  );
};

export default Orders;
