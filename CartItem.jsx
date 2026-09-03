import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from './CartSlice';

const CartItem = ({ onContinueShopping }) => {
  const cartItems = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  const calculateTotalAmount = () => {
    let total = 0;
    cartItems.forEach(item => { total += parseInt(item.cost.substring(1)) * item.quantity; });
    return total;
  };

  const calculateTotalCost = (item) => {
    return parseInt(item.cost.substring(1)) * item.quantity;
  };

  const handleContinueShopping = (e) => { if(onContinueShopping) onContinueShopping(e); };
  const handleCheckoutShopping = (e) => { alert('Functionality to be added for future reference'); };
  const handleIncrement = (item) => { dispatch(updateQuantity({ name: item.name, quantity: item.quantity + 1 })); };
  const handleDecrement = (item) => { if (item.quantity > 1) { dispatch(updateQuantity({ name: item.name, quantity: item.quantity - 1 })); } else { dispatch(removeItem(item.name)); } };
  const handleRemove = (item) => { dispatch(removeItem(item.name)); };

  return (
    <div>
      <h2>Total Cart Amount: ${calculateTotalAmount()}</h2>
      {cartItems.map(item => (
        <div key={item.name}>
          <img src={item.image} alt={item.name} />
          <div>{item.name}</div><div>{item.cost}</div>
          <div><button onClick={() => handleDecrement(item)}>-</button><span>{item.quantity}</span><button onClick={() => handleIncrement(item)}>+</button></div>
          <div>Total: ${calculateTotalCost(item)}</div>
          <button onClick={() => handleRemove(item)}>Delete</button>
        </div>
      ))}
      <button onClick={(e) => handleContinueShopping(e)}>Continue Shopping</button>
      <button onClick={(e) => handleCheckoutShopping(e)}>Checkout</button>
    </div>
  );
};
export default CartItem;
