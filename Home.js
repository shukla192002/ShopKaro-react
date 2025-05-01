// import tshirts from '../Components/Assests/images_tshirt.jpg'
// import Shoes from '../Components/Assests/images_shoes.jpg'
// import Shorts from '../Components/Assests/images_shorts.jpg'
// import phone from '../Components/Assests/images_phone.jpg'
// import watch from '../Components/Assests/images_watch.jpg'
// import sofa from '../Components/Assests/imagessofa.jpg'
import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../contexts/CartContext';
import './HomePage.css'
import About from './About';
import { Link } from 'react-router-dom';
import { IoLogoHackernews } from 'react-icons/io5';
import BuyNow from './BuyNow';
import { useNavigate } from 'react-router-dom';
import { FaShopify } from "react-icons/fa";

const Home = () => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([])
  const [buyNowOpen, setbuyNowOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)
  const [orders, setOrders] = useState([])
  const [cart, setCart] = useState([])
  const navigate= useNavigate()



 useEffect(() => {
   fetch('https://fakestoreapi.com/products?') 
   //fetch('../data/product.json') 
     .then((res) => res.json())
     .then((data) => setProducts(data)) 
     .catch((error) => console.error('Error fetching products:', error))
     console.log("mounted");
     return ()=>{
      console.log("unmounted")
     }
 }, [])

 const placeOrder = () => {
  const orderDetails = { products: cart, date: new Date().toLocaleString() };
  setOrders((prevOrders) => [...prevOrders, orderDetails]);
  // clearCart();
  navigate('/orders', { state: { orders: [...orders, orderDetails] } });
};

 const BuyNowClick = (product) => {
  setSelectedProduct(product)
  setbuyNowOpen(true)
}

const closeModal = () => {
  setbuyNowOpen(false)
}

console.log("setproducts" , products);

const AddToCart = (product) => {
  //setCart((prevCart) => [...prevCart, product])
  alert(`${product.title} added to cart!`)
  addToCart(product);     //here I am calling the function which is storing the objects
}

  return (

    <div className="home-container">
      
      <header className="header">
        <Link to="/home" className='simple'><h1 className="logo">ShopKaro <FaShopify /></h1></Link>
        <nav className="navigation">
          <Link to="/home" className="navigationlink">Home</Link>
          <a href="#products" className="navigationlink">Products</a>
          <Link to="/about" className="navigationlink">About</Link>
          <a href="#contact" className="navigationlink">Contact</a>
          <Link to="/orders" className="navigationlink">Orders</Link>
          <Link to="/cart" className="navigationlink">Cart</Link>
          <Link to="/" className='navigationlink' >logout</Link>
        </nav>
      </header>

      <div className="greet" id='home'>
        <FaShopify className='companylogo' />
        <h2>Welcome to ShopKaro</h2>
        <p>The ultimate hub for everything you’re looking for!</p>
        <button className="greet-btn">Shop Now</button>
      </div>

      
      {/* <div className="featured-products" id='products'>

        <h2 className="section-title">Top purchase for this month</h2>

        <div className="productView">

          <div className="product">
            <img src={tshirts} className="product-image" />
            <h3 className="product-title">Polo T-Shirts</h3>
            <p className="product-price">$29.99</p>
            <button className="btn">Add to Cart</button>
          </div>

          <div className="product">
            <img src={Shoes} className="product-image" />
            <h3 className="product-title">Polo Shoes</h3>
            <p className="product-price">$49.99</p>
            <button className="btn">Add to Cart</button>
          </div>

          <div className="product">
            <img src={Shorts} className="product-image" />
            <h3 className="product-title">Shorts</h3>
            <p className="product-price">$19.99</p>
            <button className="btn">Add to Cart</button>
          </div>

          <div className="product">
            <img src={phone} className="product-image" />
            <h3 className="product-title">Galaxy S24</h3>
            <p className="product-price">$60.11</p>
            <button className="btn">Add to Cart</button>
          </div>

          <div className="product">
            <img src={watch} className="product-image" />
            <h3 className="product-title">Boat 711</h3>
            <p className="product-price">$2k</p>
            <button className="btn">Add to Cart</button>
          </div>

          <div className="product">
            <img src={sofa} className="product-image" />
            <h3 className="product-title">Sofa</h3>
            <p className="product-price">$10k</p>
            <button className="btn">Add to Cart</button>
          </div>
          
          

        </div>

      </div> */}


      <div className="featured-products" id="products">
        <h2 className="section-title">Top products for this month</h2>

        <div className="productView">
          {
              products.map((product) => (
              <div className="product" key={products.id}>
                <img className="product-image" src={product.image}  />
                <h3 className="product-title">{product.title}</h3>
                <p className="product-price">${product.price}</p>
                <div className="product-buttons">
                    <button className="btn" onClick={()=>AddToCart(product)}>Add to Cart</button>
                    <button className="btn" onClick={() => BuyNowClick(product)}>Buy now</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>

      {buyNowOpen && (
        <BuyNow 
          products={selectedProduct} 
          onClose={closeModal}     /* *** */
           
        />
      )}

      <footer className="footer">
        <p>© 2024 ShopKaro.pvt.LTD</p>
        <p>Follow us on:
          <a href="#" className="footer-link">Facebook</a> |
          <a href="#" className="footer-link">Instagram</a> |
          <a href="#" className="footer-link">Twitter</a>
        </p>
        <p href="#" className="footer-link">Email: shopkaro2024@gmail.com</p>
      </footer>

    </div>



  );
}

export default Home;
