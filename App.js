import logo from './logo.svg';
import './App.css';
import LoginForm from './Components/Login/LoginForm';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import Orders from './Components/Orders';
import OrderConfirmation from './Components/OrderConfirmation';
import Cart from './Components/Cart';
import CartProvider from './contexts/CartContext';
import BuyNow from './Components/BuyNow';

function App() {
  return (
    
    <CartProvider>  
      <Router>
      <Routes>
          <Route path="/" element={<LoginForm />} />
          <Route path="/home" element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/cart" element={<Cart />} />
          <Route path='/buynow' element={<BuyNow />} />
          <Route path="/orderConfirmation" element={<OrderConfirmation />} />
        </Routes>
        </Router>
    </CartProvider>
    
  );
}

export default App;
