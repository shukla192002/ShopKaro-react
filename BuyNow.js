import React, { useState , useContext  } from 'react';
import './Buynow.css';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

const BuyNow = ({ products, onClose}) => {
  const [address, setAddress] = useState('');
  const [deliveryDate, setDeliveryDate] = useState('');
  const [paymentOption, setPaymentOption] = useState('');
  const navigate = useNavigate();
  const { placeOrder , removeItemFromCart  } = useContext(CartContext); //for saving the order in orderpage I am creating the context to save data


  const singleProduct = !Array.isArray(products);
    const productList = singleProduct ? [{ ...products, quantity: 1 }] : products;

    const getTotalPrice = () =>
      productList.reduce((total, item) => total + item.price * item.quantity, 0);

    const handleOrder = () => {
    if (address && deliveryDate && paymentOption) //************address && deliveryDate && paymentOption !=null************
    { 
      const orderDetails = {
        products: productList,
        address,
        deliveryDate,
        paymentOption,
        date: new Date().toLocaleString(),
      };

      placeOrder(orderDetails)          //function to fetch the data
      //removeItemFromCart(product)    // removing the products after adding it into the order page list

      onClose()
      
      navigate('/orderConfirmation')
      //navigate('/orders');
    } else {
      alert('Please fill all the details!')
    }
  };

  

  

  return (
    <div className="buyNOWpage">
      <div className="buyNOWcontainer">
        <h2>Buy Now</h2>
                    {/* <ul>
                      {products.map((product, index) => (
                        <li key={index}>
                    <p><strong>Product:</strong> {product.title} </p><p><strong>Price:</strong> - ${product.price}</p>
                    </li>
                  ))}
                  </ul> */}
        <ul>
        {/* (Array.isArray(products) ? products : [products]).map((product, i) */}
              {productList.map((product, i) => (
                  <p key={i}>
                      <div>
                      <strong>Product:</strong> 
                      <span style={{ marginLeft: '10px' }}>{product.title}</span>
                      <span style={{ color: 'red',border: '1px solid black',background: 'lightyellow',borderRadius: '50%',width: '35px', height: '25px', display: 'flex', fontWeight: 'bold',margin: '5px' , marginLeft: '240px' , justifyContent:'center' , alignContent:'center'  }}>
                      +{product.quantity}
                      </span>
                      ${product.price}
                      </div>
                  </p>
              ))}
         </ul>

         <p>Grand Total: ${getTotalPrice()}</p>

        <label>
          <strong>Address:</strong>
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>

        <div>
          <strong>Delivery Date:</strong>
          <input type="date" value={deliveryDate} onChange={(e) => setDeliveryDate(e.target.value)} />
        </div>

        <div>
          <strong>Payment Option:</strong>
          <select value={paymentOption} onChange={(e) => setPaymentOption(e.target.value)}>
            <option value="">Select</option>
            <option value="credit_card">Credit Card</option>
            <option value="upi">UPI</option>
            <option value="cash_on_delivery">Cash on Delivery</option>
          </select>
        </div>

        <button className='placeOrder' onClick={handleOrder}>Place Order</button>
        <button className='cancelButton' onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
};

export default BuyNow;
