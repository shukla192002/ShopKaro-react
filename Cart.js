import React, { useContext } from 'react';
import { IoHome } from "react-icons/io5";
import { IoMdArrowBack } from "react-icons/io";
import './Cart.css';
import { Link, useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import { FaShopify } from "react-icons/fa";
import { useState  } from 'react';
import BuyNow from './BuyNow';
import { useEffect } from 'react';

const Cart = () => {
    const { cart, incrementQuantity, decrementQuantity , removeItemFromCart} = useContext(CartContext)
    const navigate = useNavigate()
    //const [placeorderClicked , setorderClicked]=useState(false)
    const [buyNow, setBuyNow] = useState(false)
    const [SelectedProduct, setSelectedProduct] = useState(null)

    const [cartItems , setcartItems]=useState([])
  
    useEffect(() => {
        setcartItems(cart);
      }, [cart]); 
    

    const placeOrder = () => {
        
        //navigate('/orders');
        //navigate('/buynow');
        //clearCart();

        setSelectedProduct(cart) ////cart.product directly can we use this to get the list or product in cart
        setBuyNow(true)
      };

      const closeModal = () => {
        setBuyNow(false)
        //setSelectedProduct(null)
      }  

      const getTotalPrice = () =>
        cart.reduce((total, item) => total + item.price * item.quantity, 0)

  return (
    <div className="home-container" id='home'>
      
            <header className="header">
            <Link to="/home" className='simple'><h1 className="logo">ShopKaro <FaShopify /></h1></Link>
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
    <div className="cart-container">
      <h2>Your Cart</h2>

      <div className="cartcontent">
      {cart.length === 0 ? (
        <p>Your cart is empty!!!</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
                
                    {/* <span>{item.title}</span>  */}
                    <img src={item.image} alt={item.title} className="cart-product-image" />

                    <div className="cart-item-details">
                      <h3 className="product-title">{item.title}</h3>
                      
                    
                    
                    <div className="quantity-btn">
                  <button onClick={() => decrementQuantity(item.id)}>-</button>
                  <strong><span>{item.quantity}</span></strong>
                  <button onClick={() => incrementQuantity(item.id)}>+</button>
                </div>
                <p className="price">Price per item: ${item.price}</p>
                <p className="total" style={{color: "red"}}>Total: ${item.price * item.quantity}</p>
                    </div>
                    <button className="remove-btn" onClick={() => removeItemFromCart(item)}>
                    Remove
                    </button>

                    {/* <button className='place-order-btn' onClick={placeOrder}><strong>Place Order</strong></button> */}
                    {/* Place Order button not working as per requirement as different function has not been created for individual product rder in cart cart component need to create. */}
                    
                   
                {/* placeOrder(item) */}
            </li>
          ))}
        </ul>
      )}
      <p>Grand Total: ${getTotalPrice()}</p>
      
      {cart.length > 0 && (
        <button className='place-order-btn' onClick={placeOrder}><strong>Buy full cart</strong></button>
        )}

      
      </div>
      <Link to="/home" className="back-link">Home <IoHome className="icon" /></Link>
    </div>

    {buyNow && (
        <BuyNow 
            products={cart} 
            onClose={closeModal} 
        />
    )}

    </div>


  );
};

export default Cart;
//use context for cart "useContext" is one hook which we can use to implement this(read)(imp)
//use array for orders