// src/OrderConfirmation.js
import React, { useEffect } from 'react';
import './OrderConfirmation.css';
import { useNavigate } from 'react-router-dom';

const OrderConfirmation = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/home')
    }, 1700);

    
  }, [navigate]);

  return (
    <div className="confirmation-overlay">
      <div className="confirmation-container">
        <div className="checkmark">
          <svg viewBox="0 0 52 52" className="checkmark-svg">
            <circle className="checkmark-circle" cx="26" cy="26" r="25" fill="none" />
            <path className="checkmark-check" fill="none" 
              d="M14 27l7 7 16-16" />
          </svg>
        </div>
        <h2>Order Confirmed!</h2>
        <p>Your order has been successfully placed.</p>
      </div>
    </div>
  );
};

export default OrderConfirmation;
