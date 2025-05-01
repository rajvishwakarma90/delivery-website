import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../context/StoreContent';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Image</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div className='cart-items-title cart-items-items' key={item._id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>₹
                  {item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>₹
                  {item.price * cartItems[item._id]}</p>
                <button onClick={() => removeFromCart(item._id)}>X</button>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Delivery Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 20}</p>


            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 20}</b>
            </div>

          </div>
          <button onClick={() => navigate('/Order')}>PROCEED TO PAY CHECKOUT</button>
        </div>
        <div>
          <div className="cart-promocode">
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code' />
              <button>Submit</button>

            </div>

          </div>
        </div>

      </div>
      <hr />
    </div>
  );
};

export default Cart;
