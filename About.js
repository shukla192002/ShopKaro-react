import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutSection.css"
import { IoPersonCircleOutline } from "react-icons/io5"
import { IoHome } from "react-icons/io5"
import { FaShopify } from "react-icons/fa";

const About = () => {
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
            <div className="about-container">
                <h1>About Us</h1>
                <p>
                    Welcome to <strong>ShopKaro</strong>, where we are dedicated to transforming your shopping experience into something truly exceptional. Here are some key highlights about our commitment to you: 
                    <br />
                    • <strong>Quality Products</strong>: We meticulously curate a wide range of high-quality products designed to meet your diverse needs. From trendy apparel to essential home goods, we ensure that every item meets the highest standards of excellence. 
                    <br />
                    • <strong>User-Friendly Platform</strong>: Our platform is designed to be intuitive and easy to navigate, making it simple for you to find exactly what you’re looking for. Explore our collection of <a href="#">trendy apparel</a>, <a href="#">home essentials</a>, and more! 
                    <br />
                    • <strong>Exceptional Customer Service</strong>: Our dedicated customer service team is always here to assist you. Any questions or concerns you may have will be addressed promptly and effectively. 
                    <br />
                    • <strong>Customer Satisfaction</strong>: At ShopKaro, we strive not just to meet your expectations but to exceed them. Our loyal community of satisfied customers continues to grow, thanks to our commitment to quality and service. 
                    <br />
                    Join us in exploring a world of fantastic products and experience the difference that quality and service can make in your shopping journey! Discover more about us <a href="#">here</a> and start shopping today!
                </p>

                <div className="team-section">
                    <h2>Our Team</h2>
                    <div className="team-member">
                    <IoPersonCircleOutline className='dp-image' />
                    <p>John Doe - CEO</p>
                    </div>
                    <div className="team-member">
                    <IoPersonCircleOutline className='dp-image' />
                    <p>Jane Doe - CTO</p>
                    </div>
                </div>

                <button className="back-button" onClick={() => window.history.back()}>
                    back to home <IoHome />
                </button>
            </div>
    </div>
  )
}

export default About
